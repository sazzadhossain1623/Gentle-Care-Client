import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase.init';

function Navbar() {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li className='text-secondary font-bold'><Link to="/">Home</Link></li>
        <li className='text-secondary font-bold'><Link to="/appointment">Appointment</Link></li>
        <li className='text-secondary font-bold'><Link to="/review">Review</Link></li>
        <li className='text-secondary font-bold'><Link to="/contact">Contact</Link></li>
        <li className='text-secondary font-bold'><Link to="/about">About</Link></li>
        {
            user && <li className='text-secondary font-bold'><Link to="/dashboard">Dashboard</Link></li>
        }
        <li className='text-secondary font-bold'>
            {user ?
                <div>
                    <button onClick={logout} className="text-red-500 font-bold">Sign Out &larr;</button>
                    <p className='text-[#2E86C1] font-bold'>{user?.displayName.split(' ')[0]}</p>
                </div>
                : <Link to="/login">Login</Link>}
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Gentle Care</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end'>
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    )
}

export default Navbar