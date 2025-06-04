// import React, { useContext, useState, useEffect } from 'react'
// import { UserContext } from '../context/user.context'
// import axios from "../config/axios"
// import { useNavigate } from 'react-router-dom'

// const Home = () => {

//     const { user } = useContext(UserContext)
//     const [ isModalOpen, setIsModalOpen ] = useState(false)
//     const [ projectName, setProjectName ] = useState(null)
//     const [ project, setProject ] = useState([])

//     const navigate = useNavigate()

//     function createProject(e) {
//         e.preventDefault()
//         console.log({ projectName })

//         axios.post('/projects/create', {
//             name: projectName,
//         })
//             .then((res) => {
//                 console.log(res)
//                 setIsModalOpen(false)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     useEffect(() => {
//         axios.get('/projects/all').then((res) => {
//             setProject(res.data.projects)

//         }).catch(err => {
//             console.log(err)
//         })

//     }, [])

//     return (
//         <main className='p-4'>
//             <div className="projects flex flex-wrap gap-3">
//                 <button
//                     onClick={() => setIsModalOpen(true)}
//                     className="project p-4 border border-slate-300 rounded-md">
//                     New Project
//                     <i className="ri-link ml-2"></i>
//                 </button>

//                 {
//                     project.map((project) => (
//                         <div key={project._id}
//                             onClick={() => {
//                                 navigate(`/project`, {
//                                     state: { project }
//                                 })
//                             }}
//                             className="project flex flex-col gap-2 cursor-pointer p-4 border border-slate-300 rounded-md min-w-52 hover:bg-slate-200">
//                             <h2
//                                 className='font-semibold'
//                             >{project.name}</h2>

//                             <div className="flex gap-2">
//                                 <p> <small> <i className="ri-user-line"></i> Collaborators</small> :</p>
//                                 {project.users.length}
//                             </div>

//                         </div>
//                     ))
//                 }


//             </div>

//             {isModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white p-6 rounded-md shadow-md w-1/3">
//                         <h2 className="text-xl mb-4">Create New Project</h2>
//                         <form onSubmit={createProject}>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700">Project Name</label>
//                                 <input
//                                     onChange={(e) => setProjectName(e.target.value)}
//                                     value={projectName}
//                                     type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
//                             </div>
//                             <div className="flex justify-end">
//                                 <button type="button" className="mr-2 px-4 py-2 bg-gray-300 rounded-md" onClick={() => setIsModalOpen(false)}>Cancel</button>
//                                 <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Create</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}


//         </main>
//     )
// }

// export default Home

import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user.context'

const Home = () => {
  const { user } = useContext(UserContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [project, setProject] = useState([])

  const navigate = useNavigate()

  function createProject(e) {
    e.preventDefault()
    console.log({ projectName })

    // Dummy create simulation
    setProject(prev => [
      ...prev,
      {
        _id: Date.now(),
        name: projectName,
        users: [],
      },
    ])
    setIsModalOpen(false)
    setProjectName('')
  }

  useEffect(() => {
    // Add dummy data for UI design
    setProject([
      {
        _id: '1',
        name: 'AI Chat Assistant',
        users: [{}, {}, {}],
      },
      {
        _id: '2',
        name: 'Team Research Board',
        users: [{}, {}],
      },
      {
        _id: '3',
        name: 'Startup Ideation Hub',
        users: [{}],
      },
    ])
  }, [])

  return (
    <main className="p-6 bg-[#FFF4E4] min-h-screen">
      <h1 className="text-3xl font-bold text-[#2B1A12] mb-6">Welcome to ThinkTogether 👥</h1>

      <div className="projects flex flex-wrap gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-6 rounded-lg border border-[#DC6D18] text-[#DC6D18] hover:bg-[#F8E0C9] transition"
        >
          + New Project
        </button>

        {project.map((project) => (
          <div
            key={project._id}
            onClick={() =>
              navigate(`/project`, {
                state: { project },
              })
            }
            className="bg-white shadow-lg hover:shadow-xl transition cursor-pointer rounded-lg p-6 w-64 border border-[#B1AA81]"
          >
            <h2 className="text-xl font-semibold text-[#2B1A12] mb-2">{project.name}</h2>
            <p className="text-[#2B1A12]">
              <i className="ri-user-line mr-1"></i>
              {project.users.length} Collaborator{project.users.length !== 1 ? 's' : ''}
            </p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-[#2B1A12]">Create New Project</h2>
            <form onSubmit={createProject}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#2B1A12]">Project Name</label>
                <input
                  onChange={(e) => setProjectName(e.target.value)}
                  value={projectName}
                  type="text"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC6D18]"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-200 text-[#2B1A12] rounded-md hover:bg-gray-300"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#DC6D18] text-white rounded-md hover:bg-[#bb5a10]"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
