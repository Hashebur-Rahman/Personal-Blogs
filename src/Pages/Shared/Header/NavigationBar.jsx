import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function NavigationBar() {

    const location = useLocation()
    const navigate = useNavigate()
    const [user, setUser] = useState();

    // console.log(user);

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/')
        // console.log("btn click");
    }

    const navOption =
        <>
            <li><Link className='hover:border-b-2 border-red-500' to='home'>Home</Link></li>
            <li><Link className='hover:border-b-2 border-red-500' to='uploadImage'>Image Uploading</Link></li>
            <li><Link className='hover:border-b-2 border-red-500' to='cvMaker'>CV Maker</Link></li>
            <li><Link className='hover:border-b-2 border-red-500' to='basenessCard'>basenessCard  Maker</Link></li>
            <li><Link className='hover:border-b-2 border-red-500' to='studentCard'> Student Id Maker</Link></li>
            <li><Link className='hover:border-b-2 border-red-500' to='https://dev-hasahebur.vercel.app/'> About Me</Link></li>


            {/* <li><Link to='/login'>Login</Link></li> */}
        </>



    // useEffect(() => {
    //     const user = localStorage.getItem('user');
    //     if (!user) return navigate('/login')
    //     setUser(JSON.parse(user))

    // }, [])

    return (
        <div className="navbar h-7 fixed z-10 bg-opacity-30 mt-9  bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl" href='/'> Personal Blogs</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div>
                    </div>
                    {navOption}
                    <Link to="/auth/login"><Button variant='contained' size='large'>
                        Log Out
                    </Button> </Link>
                </ul>
            </div>


        </div>
    )
}
