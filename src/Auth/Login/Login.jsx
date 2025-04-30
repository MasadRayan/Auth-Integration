import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl my-10">
            <h3 className="text-3xl text-center pt-5 font-bold">Login now!</h3>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>New to this website? Please <Link className='text-blue-500 underline' to={'/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;