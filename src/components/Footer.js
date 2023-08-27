import React from 'react';
import { YouTube, Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <div className='text-white mt-4 p-4'>
            <span className='block h-1 m-2 w-full bg-gray-500'></span>
            <div>
                <h1 className='text-center font-bold text-xl'>More From Star Wars:</h1>
                <ul className="space-x-4 mt-2 items-center justify-center flex">
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
                <h1 className='text-center font-bold text-sm my-2'>TM & © Starfilms Ltd. All Rights Reserved</h1>
            </div>
        </div>
    )
}

export default Footer