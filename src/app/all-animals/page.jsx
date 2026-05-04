


import AnimalCard from '@/components/AnimalCard';
import React from 'react';

const AllAnimalsPage = async() => {

//     const res = await fetch("http://localhost:3000/data.json", {
//   cache: "no-store",
// });
// const animals = await res.json();
    const res = await fetch('https://b13-a08-az.vercel.app/data.json', {
        cache: 'no-store'
    })
    // const res = await fetch('https://b13-a08-az2.vercel.app/data.json', {
    //     cache: 'no-store'
    // })
    const animals= await res.json()

      const sortedAnimals = [...animals].sort((a, b) => a.price - b.price);
       return (
        <div>

            <h1 className="text-2xl font-bold m-4">All Animals</h1>

            

            <div className="grid grid-cols-4 gap-5">
                {sortedAnimals.map(animal=> <AnimalCard key={animal.id} animal={animal}/>)}
            </div>

            
        </div>
    );
};

export default AllAnimalsPage;