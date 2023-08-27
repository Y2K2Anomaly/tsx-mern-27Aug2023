import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        <div className='mt-12 grow flex items-center justify-around'>
            <div className='w-[80vw] h-[52vh] sm:h-[55vh]'>
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
                    <button className='text-white py-1 bg-[#F5385D] rounded-sm'>Join</button>
                    <div className='text-center py-2 text-gray-500 cursor-pointer'>
                        Already Registered? <Link to={'/login'} className='underline text-gray-500'>Sign In</Link>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default RegisterPage;