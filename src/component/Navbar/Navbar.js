import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import logo from '../../Image/logo.png'

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <nav className='bg-black py-2'>
            <div className='flex container mx-auto justify-between items-center'>
                <div className='flex justify-between items-center'>
                    <img className='w-20' src={logo} alt="" />
                    <div className='ml-2 text-left'>
                        <h3 className='font-bold text-2xl text-slate-100 mb-0'><span className='text-teal-400'>TANVIR</span> ANOWEAR</h3>
                        <p className='text-slate-100 text-sm'>Journalist & High level info collection expert</p>
                    </div>

                </div>
                <div className='text-lg'>
                    <Link className='px-3 mx-2 no-underline text-slate-100' to="/">Home</Link>
                    <Link className='px-3 mx-2 no-underline text-slate-100' to="services">Services</Link>
                    <Link className='px-3 mx-2 no-underline text-slate-100' to="blogs">Blogs</Link>
                    <Link className='px-3 mx-2 no-underline text-slate-100' to="about">About</Link>
                    {
                        user ? <button onClick={handleLogout} className='text-slate-100 px-2'>Log out</button> : <Link className='px-3 mx-2 no-underline text-slate-100' to="login">Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;