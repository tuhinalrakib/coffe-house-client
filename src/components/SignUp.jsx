import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { userSignUp } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const { email, password, ...restFormData } = Object.fromEntries(formData.entries())
        // console.log(userProfile)
        // console.log(email, password)

        userSignUp(email, password)
            .then(res => {
                // console.log(res.user)
                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: res.user?.metadata?.creationTime,
                    lastSignInTime: res.user?.metadata?.lastSignInTime
                }

                // send profile in DB
                fetch("https://coffe-store-server-sooty.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "User Added Successfuly",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500
                            })
                            form.reset()
                        }
                    })
            })
            .catch(e => {
                console.log(e.message)
            })
    }
    return (
        <div className="card bg-base-100 max-w-sm mx-auto mt-10 p-5 shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" name='name' />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />
                    <label className="label">Address</label>
                    <input type="text" className="input" placeholder="Address" name='address' />
                    <label className="label">Phone No</label>
                    <input type="tel" className="input" placeholder="Phone No" name='phone' />
                    <label className="label">Photo</label>
                    <input type="url" className="input" placeholder="Photo" name='photo' />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;