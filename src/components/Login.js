import React from 'react';
import {signInWithPopup} from 'firebase/auth';
import {auth, provider} from '../firebase';
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const loginWithGoogle = async () => {
        await signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                navigate('/');
            }).catch(err => alert(err.message))
    }
    return (
        <div className="w-full flex-col flex justify-center items-center h-screen">
            <h1 className='text-4xl m-10'>
                LOG IN
            </h1>
            <button onClick={loginWithGoogle} className="flex justify-between items-center bg-gray-100 text-gray-600 p-3 rounded-lg hover:bg-gray-200">
                <img alt='' src="https://img.icons8.com/color/48/000000/google-logo.png" className='mr-2 w-6 h-6' />
                Sign In With Google
            </button>

        </div>
    )
}

export default Login