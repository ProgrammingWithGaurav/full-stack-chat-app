import React, { useEffect, useState } from 'react';
import ChatInput from './components/ChatInput';
import Chats from './components/Chats';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import { LoginIcon } from '@heroicons/react/outline';
import { auth } from './firebase';
import Modal from './components/Modal';
import { addDoc, serverTimestamp, collection, updateDoc, doc } from '@firebase/firestore';
import { getDownloadURL, uploadString, ref } from '@firebase/storage';
import { db, storage } from './firebase';

function App() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fileType, setFileType] = useState('');

  const sendFile = async () => {
    setLoading(true);
    const docRef = await addDoc(collection(db, 'all-type-chats'), {
      type: fileType,
      uid: user.uid,
      username: user.displayName,
      url: '',
      timestamp: serverTimestamp()
    });

    const fileRef = ref(storage, `all_type_chat_files/${docRef.id}`);
    await uploadString(fileRef, selectedFile, 'data_url').then(async snapshot => {
      const downloadURL = await getDownloadURL(fileRef);
      await updateDoc(doc(db, 'all-type-chats', docRef.id), {
        url: downloadURL
      })
      setSelectedFile(null);
      setModalOpen(false);
      setLoading(false);
    })
  }

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
          <LoginIcon onClick={() => auth.signOut()} className='m-3 w-7 h-7 opacity-50 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300' />
          <Chats user={user} />
          <Modal
            setSelectedFile={setSelectedFile} sendFile={sendFile} modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <ChatInput loading={loading} fileType={fileType} setFileType={setFileType} modalOpen={modalOpen} setModalOpen={setModalOpen} selectedFile={selectedFile} setSelectedFile={setSelectedFile} input={input} setInput={setInput} user={user} />
        </div>
      } />
      <Route path='/login' element={<Login />} />
    </Routes>
  )

}

export default App