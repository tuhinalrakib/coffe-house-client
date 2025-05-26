import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const SignIn = () => {
    const { userSignIn } = use(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const { email, password } = Object.fromEntries(formData.entries())
        console.log(email, password)
        userSignIn(email, password)
            .then(result => {
                const signInInfo = {
                    email,
                    lastSignInTime: result.user.metadata.lastSignInTime
                }

                // send backend
                fetch("https://coffe-store-server-sooty.vercel.app/users", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(signInInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
    }

    return (
        <div>
            <div className="card bg-base-100 max-w-sm mx-auto mt-10 p-5 shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold text-center">Sign In now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSignIn} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;