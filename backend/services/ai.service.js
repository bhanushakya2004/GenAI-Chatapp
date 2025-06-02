import { GoogleGenerativeAI } from "@google/generative-ai";
import { RunnableSequence } from "langchain/schema/runnable";
import { PromptTemplate } from "langchain/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { BufferMemory } from "langchain/memory";

// Gemini initialization (still using native API to comply with original pattern)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);

// LangChain Gemini Chat Model with memory
const chatModel = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_AI_KEY,
  model: "gemini-1.5-flash",
  temperature: 0.4,
});

// Short-term memory (last 5 turns)
const memory = new BufferMemory({
  returnMessages: true,
  memoryKey: "history",
  inputKey: "input",
  k: 5,
});

// Prompt template with memory support and your system instruction
const prompt = PromptTemplate.fromTemplate(`
You are an expert in MERN and Development with 10 years of experience. You:
- Always write modular, maintainable code
- Use understandable comments and best practices
- Create files as needed, never overwrite logic
- Handle edge cases and build scalable solutions

<example>
user: Create an express application
response: {{
  "text": "This is your fileTree structure of the express server",
  "fileTree": {{
    "app.js": {{
      "file": {{
        "contents": "... Express code ..."
      }}
    }},
    "package.json": {{
      "file": {{
        "contents": "... package.json ..."
      }}
    }}
  }},
  "buildCommand": {{
    "mainItem": "npm",
    "commands": ["install"]
  }},
  "startCommand": {{
    "mainItem": "node",
    "commands": ["app.js"]
  }}
}}
</example>

<example>
user: Hello
response: {{
  "text": "Hello, how can I help you today?"
}}
</example>

IMPORTANT: Never use filenames like routes/index.js.

{history}
User: {input}
`);

// LangChain pipeline (RunnableSequence)
const chain = RunnableSequence.from([
  {
    input: (input) => input.prompt,
    history: async () => (await memory.loadMemoryVariables({})).history || [],
  },
  prompt,
  chatModel,
  async (res) => {
    await memory.saveContext({ input: res.input }, { output: res.content });
    return res.content;
  },
]);

// Exposed function (your original signature kept)
export const generateResult = async (prompt) => {
  try {
    const result = await chain.invoke({ prompt });
    return result;
  } catch (err) {
    console.error("Error in generateResult:", err.message);
    return "An error occurred while generating the result.";
  }
};
