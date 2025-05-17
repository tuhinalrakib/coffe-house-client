import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffe = () => {
    const coffe = useLoaderData()
    const { _id, name, photo, price, quantity, supplier, details, test } = coffe

    const handleUpdateSubmit = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const updateCoffee = Object.fromEntries(formData.entries())

        // updated coffe send to DB
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Coffee data updated",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='p-2 md:p-24'>
            <div className='px-2 md:px-28 pt-16 bg-base-200 text-center space-y-4'>
                <h1 className="text-6xl rancho text-[#374151]">Update Coffee</h1>
            </div>
            <form onSubmit={handleUpdateSubmit} className='bg-base-200 px-2 md:px-28 pt-8 pb-16 text-[rgba(27,26,26,.8)]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Name</label>
                        <input type="text" name='name' defaultValue={name} required className="input w-full" placeholder="Enter Coffe Name" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Quantity</label>
                        <input type="number" name='quantity' required defaultValue={quantity} className="input w-full" placeholder="Enter Quantity" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Supplier</label>
                        <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter Coffee Supplier" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Test</label>
                        <input type="text" name='test' defaultValue={test} className="input w-full" placeholder="Enter Coffe Teste" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Price</label>
                        <input type="number" name='price' defaultValue={price} required className="input w-full" placeholder="Enter Price per Cup" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Details</label>
                        <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Enter Coffee Details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset  border-none rounded-box border p-4">
                    <label className="label text-xl font-semibold">Photo</label>
                    <input type="url" name='photo' defaultValue={photo} className="input w-full" placeholder="Enter Photo URL" />
                </fieldset>
                <button type='submit' className='rancho py-3 w-full bg-[#D2B48C] rounded-2xl text-[#331A15] text-2xl cursor-pointer'>Add Coffe</button>
            </form>
        </div>
    );
};

export default UpdateCoffe;