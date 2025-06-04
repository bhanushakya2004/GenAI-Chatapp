// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../context/user.context'

// const UserAuth = ({ children }) => {

//     const { user } = useContext(UserContext)
//     const [ loading, setLoading ] = useState(true)
//     const token = localStorage.getItem('token')
//     const navigate = useNavigate()




//     useEffect(() => {
//         if (user) {
//             setLoading(false)
//         }

//         if (!token) {
//             navigate('/login')
//         }

//         if (!user) {
//             navigate('/login')
//         }

//     }, [])

//     if (loading) {
//         return <div>Loading...</div>
//     }


//     return (
//         <>
//             {children}</>
//     )
// }

// export default UserAuth

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';

const UserAuth = ({ children }) => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    // 🚧 TEMPORARY BYPASS FOR DEVELOPMENT
    // Comment out the redirect while backend is under development

    // if (!token || !user) {
    //   navigate('/login');
    // }

    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return <>{children}</>;
};

export default UserAuth;
