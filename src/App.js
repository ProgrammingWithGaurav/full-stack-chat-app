import React, { useEffect } from 'react';
import ChatInput from './components/ChatInput';
import Chats from './components/Chats';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        navigate('/')
      } else {
        navigate('/login');
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line 
  }, []);
  return (
      <Routes>
        <Route path="/" element={
          <div className='overflow-y-scroll overflow-x-hidden'>
            <Chats />
            <ChatInput />
          </div>
        } />
        <Route path='/login' element={<Login />} />
      </Routes>
  )

}

export default App