import React, { useEffect, useState } from 'react';
import ChatInput from './components/ChatInput';
import Chats from './components/Chats';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import {LoginIcon} from '@heroicons/react/outline';
import { auth } from './firebase';

function App() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
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
            <LoginIcon onClick={() => auth.signOut()} className='w-7 h-7 opacity-50 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300'/>
            <Chats user={user}/>
            <ChatInput input={input} setInput={setInput} user={user} />
          </div>
        } />
        <Route path='/login' element={<Login />} />
      </Routes>
  )

}

export default App