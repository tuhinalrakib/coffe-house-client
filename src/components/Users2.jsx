import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';
import Loader from './Loader';

const Users2 = () => {
    const { deleteUserFromFirebase } = use(AuthContext)
    const { isPending, isError, error, data: usersData } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://coffe-store-server-sooty.vercel.app/users')
            return res.json()
        },
    })

    if (isPending) {
        return <Loader></Loader>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

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
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">All Users</h2>
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="table w-full">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th>#</th>
                            <th>Name & Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user, i) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="w-12 h-12 mask mask-squircle">
                                                <img src={user.photo} alt={user.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm text-gray-500">{user.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.phone}
                                    <br />
                                    <span className="badge badge-outline text-xs mt-1">
                                        Desktop Support Technician
                                    </span>
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button className="btn btn-outline btn-sm">Details</button>
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="btn btn-error btn-sm text-white"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users2;