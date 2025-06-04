import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { UserProvider } from './context/user.context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const App = () => {
  return (
    <UserProvider>
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </UserProvider>
  );
};

export default App;
