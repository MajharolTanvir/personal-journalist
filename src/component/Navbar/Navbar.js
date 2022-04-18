import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import logo from '../../Image/logo.png';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container">
                <Link className="navbar-brand flex justify-center items-center" to="/">
                    <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    <h4 className='text-white pl-1'><span className='text-teal-400'>TANVIR </span>ANOWEAR</h4>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white text-center" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-center" to="blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-center" to="about">About</Link>
                        </li>
                        {user ? <button onClick={handleLogout} className='text-white px-2'>Log out</button> :
                            <li className="nav-item">
                                <Link className="nav-link text-white text-center" to="login">Login</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;