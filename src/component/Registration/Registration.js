import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'


const Registration = () => {
    const [error, setError] = useState('')

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPassRef = useRef('')

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPass = confirmPassRef.current.value;

        if (password !== confirmPass) {
            setError('Please enter same password')
            return;
        }
        if (password.length > 8) {
            createUserWithEmailAndPassword(email, password);
            setError('')
            console.log(email, password);
        }
        else {
            setError('Please input atleast 8 digit password')
            return;
        }
    }
    return (
        <div className='flex justify-center bg-gradient-to-b from-black to-teal-400'>
            <div className='w-96 border-4 border-cyan-400 px-6 py-4 my-12 rounded-lg shadow-2xl shadow-sky-400'>
                <h4 className='text-center pb-4 text-slate-50'>Registration here</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-50 dark:text-gray-300">Your email</label>
                        <input ref={emailRef} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-50 dark:text-gray-300">Your password</label>
                        <input ref={passwordRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required="" />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="floating_repeat_password" className="block mb-2 text-sm font-medium text-slate-50 dark:text-gray-300">Confirm password</label>
                        <input ref={confirmPassRef} type="password" name="repeat_password" id="floating_repeat_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required="" />
                    </div>
                    {error ? <p className='text-red-500'>{error}</p> : ''}
                    <div className="flex items-start mb-3">
                        <p className='text-slate-50'>Already have an account?</p>
                        <Link to='/login' className='ml-1 text-sky-200 hover:text-black'>Log in</Link>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ width: '100%' }}>Registration</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;