import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const usersData = useLoaderData()
    console.log(usersData)
    return (
        <div>
            {
                usersData.map((user,i)=><User i={i} user={user} key={user._id}></User>)
            }
        </div>
    );
};

export default Users;