import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';

const User = ({ user, i }) => {
    const { _id, name, phone, photo, address, email } = user

    const { deleteUserFromFirebase } = use(AuthContext)

    const handleDeleteUser = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(res => {
                if (res.isConfirmed) {
                    fetch(`https://coffe-store-server-sooty.vercel.app/users/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                // delete user from firebase
                                deleteUserFromFirebase()

                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                NO:
                            </th>
                            <th>Name</th>
                            <th>Phone No</th>
                            <th>email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                {i + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={photo} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                        <div className="text-sm opacity-50">{address}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {phone}
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>{email}</td>
                            <th>
                                <button className="btn btn-ghost btn-sm">Details</button>
                                <button onClick={() => handleDeleteUser(_id)} className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;