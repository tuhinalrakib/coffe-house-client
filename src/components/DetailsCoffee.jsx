import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsCoffee = () => {
    const coffeData = useLoaderData()
    const { name, photo, price, quantity, supplier, details, test } = coffeData
    return (
        <div className='min-h-screen'>
            <div className='shadow-2xl mt-5 w-xs flex flex-col justify-center items-start rounded-2xl mx-auto p-5'>
                <div>
                    <img src={photo} alt={name} />
                </div>
                <h2>Name: {name}</h2>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <h4>Supplier: {supplier}</h4>
                <p>Deatils: {details}</p>
                <p>Test: {test}</p>
            </div>
        </div>
    );
};

export default DetailsCoffee;