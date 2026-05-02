import React from 'react';
import AnimalCard from './AnimalCard';

const Featured = async() => {
    const res = await fetch('https://b13-a08-az2.vercel.app/data.json')
    const animals = await res.json()
    const featured = animals.slice(0, 6)
    console.log(featured)
    return (
         <div>
            <h1 className="text-2xl font-bold my-5">Top Generations</h1>

            <div className="grid grid-cols-4 gap-5">
                {featured.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
        </div>
    );
};

export default Featured;