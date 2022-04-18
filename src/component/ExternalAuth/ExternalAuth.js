import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ExternalAuth = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const navigate = useNavigate('')

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }
    const handleSignInWithFacebook = () => {
        signInWithFacebook();
    }
    const handleSignInWithGithub = () => {
        signInWithGithub();
    }
    if (googleUser || facebookUser || githubUser) {
        navigate('/')
    }

    return (
        <div>
            <div className='flex items-center my-3 justify-center'>
                <div style={{ height: '3px' }} className='bg-slate-400 w-32 mr-4 rounded-lg'></div>
                <p>OR</p>
                <div style={{ height: '3px' }} className='bg-slate-400 w-32 ml-4 rounded-lg'></div>
            </div>
            <div className='grid grid-rows-3'>
                <button className='border-2 border-cyan-300 hover:border-indigo-600 my-2 rounded-lg bg-cyan-300 hover:bg-indigo-600 text-black flex items-center justify-center text-md font-bold py-2' onClick={handleSignInWithGoogle}><FaGoogle className='mr-2 text-xl' />Google sign in</button>
                <button className='border-2 border-cyan-300 hover:border-indigo-600 my-2 rounded-lg bg-cyan-300 hover:bg-indigo-600 text-black flex items-center justify-center text-md font-bold py-2' onClick={handleSignInWithFacebook}><FaFacebook className='mr-2 text-xl' />Facebook sign in</button>
                <button className='border-2 border-cyan-300 hover:border-indigo-600 my-2 rounded-lg bg-cyan-300 hover:bg-indigo-600 text-black flex items-center justify-center text-md font-bold py-2' onClick={handleSignInWithGithub}><FaGithub className='mr-2 text-xl' />Github sign in</button>
            </div>
        </div>
    );
};

export default ExternalAuth;