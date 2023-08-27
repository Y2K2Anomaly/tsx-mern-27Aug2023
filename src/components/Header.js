import React, { useState } from 'react';
import { YouTube, Facebook, Twitter, Instagram } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../services/authSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchOpen, setSearchOpen] = useState(false);

    const logOutHandler = () => {
        dispatch(clearAuth())
        localStorage.removeItem('user')
        navigate('/login')
    }


    return (
        <header className="bg-black h-28 flex justify-around">

            <ul className="space-x-4 items-center hidden md:flex">
                <li className="other social-icon">
                    <a href="https://www.tiktok.com/@starwars" target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6" src="https://lumiere-a.akamaihd.net/v1/images/tiktok-logo-white_dd1a4867.svg?region=0%2C0%2C100%2C100" alt="TikTok" />
                    </a>
                </li>
                <li className="instagram social-icon">
                    <a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer">
                        <Instagram sx={{ color: "white" }} />
                    </a>
                </li>
                <li className="twitter social-icon">
                    <a href="https://twitter.com/starwars" target="_blank" rel="noopener noreferrer">
                        <Twitter sx={{ color: "white" }} />
                    </a>
                </li>
                <li className="facebook social-icon">
                    <a href="https://www.facebook.com/StarWars" target="_blank" rel="noopener noreferrer">
                        <Facebook sx={{ color: "white" }} />
                    </a>
                </li>
                <li className="youtube social-icon">
                    <a href="https://www.youtube.com/user/starwars" target="_blank" rel="noopener noreferrer">
                        <YouTube sx={{ color: "white" }} />
                    </a>
                </li>
                <li className="other social-icon separator-before">
                    <a href="https://starwarskids.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15" alt="Star Wars Kids" />
                    </a>
                </li>
            </ul>

            <Link to='/'>
                <img className={`w-44 h-20 m-4  ${searchOpen && "hidden"} sm:block cursor-pointer`} src="/assets/starwars_logo.png" alt="logo" />
            </Link>

            <div className="SearchInput flex items-center">
                <div className={`search flex items-center space-x-1 mx-auto px-4 py-2 cursor-pointer rounded-lg shadow-lg hover:bg-gray-900 transition delay-125 duration-150 ease-in-out ${searchOpen && "hidden"}`} onClick={() => setSearchOpen(prev => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <span className="text-white hidden sm:block tracking-wide">SEARCH</span>
                </div>
                {searchOpen &&
                    <div className="flex px-6 py-2 mr-6 bg-[#333] rounded-md h-auto w-auto items-center relative" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 absolute left-2 top-4 hover:text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type="text" className="px-4 py-2 bg-[#333] rounded-md outline-none text-white" placeholder="SEARCH" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 m-2" onClick={() => setSearchOpen(prev => !prev)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                }
                <div className={`user flex items-center space-x-1 mx-2 px-4 py-2 cursor-pointer rounded-lg shadow-lg hover:bg-gray-900 transition delay-125 duration-150 ease-in-out ${searchOpen && "hidden"} w-full`} onClick={logOutHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span className="text-white hidden sm:block tracking-wide">Logout</span>
                </div>
            </div>
        </header >
    )
}

export default Header;