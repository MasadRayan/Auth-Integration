import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase.init';

const Register = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl my-10">
            <h3 className="text-3xl text-center pt-5 font-bold">Register now!</h3>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already have an account? Please <Link className='text-blue-500 underline' to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;