import React from 'react';
import Swal from 'sweetalert2';

const AddCoffe = () => {

    const handleSubmit = e=>{
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const coffeeData = Object.fromEntries(formData.entries())
        // console.log(coffeeData)
        fetch("http://localhost:3000/coffees",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(coffeeData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                // alert("Coffe Added")
                Swal.fire({
                    title : "Coffee Added Successfuly",
                    icon : "success",
                    draggable : true
                })
                form.reset()
            }
        })
    }

    return (
        <div className='p-2 md:p-24'>
            <div className='px-2 md:px-28 pt-16 bg-base-200 text-center space-y-4'>
                <h1 className="text-6xl rancho text-[#374151]">Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleSubmit} className='bg-base-200 px-2 md:px-28 pt-8 pb-16 text-[rgba(27,26,26,.8)]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Name</label>
                        <input type="text" name='name' required className="input w-full" placeholder="Enter Coffe Name" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Quantity</label>
                        <input type="number" name='quantity' required className="input w-full" placeholder="Enter Quantity" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Enter Coffee Supplier" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Test</label>
                        <input type="text" name='test' className="input w-full" placeholder="Enter Coffe Teste" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Price</label>
                        <input type="number" name='price' required className="input w-full" placeholder="Enter Price per Cup" />
                    </fieldset>
                    <fieldset className="fieldset  border-none rounded-box border p-4">
                        <label className="label text-xl font-semibold">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Enter Coffee Details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset  border-none rounded-box border p-4">
                    <label className="label text-xl font-semibold">Photo</label>
                    <input type="url" name='photo' className="input w-full" placeholder="Enter Photo URL" />
                </fieldset>
                <button type='submit' className='rancho py-3 w-full bg-[#D2B48C] rounded-2xl text-[#331A15] text-2xl cursor-pointer'>Add Coffe</button>
            </form>
        </div>
    );
};

export default AddCoffe;