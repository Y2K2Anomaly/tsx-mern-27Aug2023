import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../services/authSlice';
import Footer from '../components/Footer';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('pawan@gmail.com');
    const [password, setPassword] = useState('123456');

    function loginUser(e) {
        e.preventDefault();

        const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        dispatch(setToken(mockToken));

        const user = { email, password, mockToken };
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(setUser(localStorage.getItem('user')));
        navigate('/');
    }

    return (
        <div className='w-[100vw] h-[100vh] grow flex flex-col items-center justify-start'>
            <div className='my-12'>
                <img className='w-88 sm:w-96 sm:h-40 h-32' src="/assets/starwars_logo.png" alt="" />
            </div>
            <div className='w-[80vw]'>
                <h1 className='text-white text-4xl text-center mb-4'>Login</h1>
                <form className='max-w-lg space-y-1 mx-auto flex flex-col onSubmit={loginUser}' onSubmit={loginUser}>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className='px-1 rounded-sm h-8'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className='px-1 rounded-sm h-8'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='text-white py-1 bg-[#F5385D] hover:bg-[#ba2f4b] rounded-sm transform transition delay-150 duration-150 ease-out'>Login</button>
                    <div className='text-center py-2 text-gray-500'>
                        Don't have an account yet? <Link to={'/register'} className='underline text-gray-500'>Register now</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage;