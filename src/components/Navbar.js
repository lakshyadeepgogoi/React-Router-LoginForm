import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;



  return (
    <div className='flex  justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        

        <Link to="/">
            <img src={logo} alt='Logo' width={160} height={32} loading='lazy' />
        </Link>

        <nav className='hidden md:block '>
            <ul className='flex flex-wrap gap-x-6 text-richblack-100'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='md:flex items-center gap-x-4 ' >
            <button className=' r-4'>
                <svg svg stroke="currentColor" fill="#AFB2BF" stroke-width="0" viewBox="0 0 1024 1024" font- size="24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> 
                    <path d="M904 160H120c-4.4 0-8 3.6-8 Bv64c8 4.4 3.6 8 8 8h784c4.4 @ 8-3.6 8-8v-64c8-4. 4-3.6-8-8-8zme 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 @ 8-3.6 8-8v-64c8- 4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c8 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c8 -4.4-3.6-8-8-82"></path>
                </svg>
            </button>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700  '>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700  '>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }} className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700  '>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700  '>
                        DashBoard
                    </button>
                </Link>
            }
        </div>



    </div>
  )
}

export default Navbar