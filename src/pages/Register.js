import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(e) {
        e.preventDefault();
        navigate('/login')
    }

    return (
        <div className='w-[100vw] h-[100vh] grow flex flex-col items-center justify-start'>
            <div className='my-12'>
                <img className='w-88 sm:w-96 sm:h-40 h-32' src="/assets/starwars_logo.png" alt="" />
            </div>
            <div className='w-[80vw]'>
                <h1 className='text-white text-4xl text-center mb-4'>Sign Up</h1>
                <form className='max-w-lg space-y-1 mx-auto flex flex-col' onSubmit={registerUser}>
                    <input
                        type="text"
                        placeholder="eg. John Doe"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='px-1 rounded-sm h-8'
                    />
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='px-1 rounded-sm h-8'
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='px-1 rounded-sm h-8'
                    />
                    <button className='text-white py-1 bg-[#F5385D] rounded-sm hover:bg-[#ba2f4b] transform transition delay-150 duration-150 ease-out'>Join</button>
                    <div className='text-center py-2 text-gray-500 cursor-pointer'>
                        Already Registered? <Link to={'/login'} className='underline text-gray-500'>Sign In</Link>
                    </div>
                </form>
            </div >
            <Footer />
        </div >
    )
}

export default RegisterPage;