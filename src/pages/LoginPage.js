import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../services/authSlice';

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
        setUser({ email, password });
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/');
    }

    return (
        <div className='mt-12 grow flex items-center justify-around'>
            <div className='w-[80vw] h-[52vh] sm:h-[55vh]'>
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
                    <button className='text-white py-1 bg-[#F5385D] rounded-sm'>Login</button>
                    <div className='text-center py-2 text-gray-500'>
                        Don't have an account yet? <Link to={'/register'} className='underline text-gray-500'>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;