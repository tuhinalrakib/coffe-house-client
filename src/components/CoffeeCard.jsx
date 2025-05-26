import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, photo, name, price, quantity } = coffee

    const handleDelete = (_id) => {
        // console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffe-store-server-sooty.vercel.app/coffees/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remainingCoffees)
                        }
                    })
            }
        });

    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={photo} />
                </figure>
                <div className="flex w-full justify-around items-center">
                    <div className='space-y-2'>
                        <h2 className="card-title">{name}</h2>
                        <p>Price: <span className='font-semibold'>{price}</span></p>
                        <p>Quantity: <span className='font-semibold'>{quantity}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-5">
                            <Link to={`/coffees/${_id}`}><button className="btn join-item">View</button></Link>
                            <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;