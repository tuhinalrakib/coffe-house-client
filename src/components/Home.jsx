// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    // const coffeeData = useLoaderData()
    // const [coffes, setCoffees] = useState(coffeeData)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5'>
            {/* {
                coffes.map(coffee=>
                <CoffeeCard 
                coffee={coffee} 
                key={coffee._id}
                coffees={coffes}
                setCoffees={setCoffees}    
                >
                </CoffeeCard>)
            } */}
        </div>
    );
};

export default Home;