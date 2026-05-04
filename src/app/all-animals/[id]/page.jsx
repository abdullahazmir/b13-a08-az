import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiLocationPlus } from "react-icons/bi";
import { IoPricetag } from "react-icons/io5";

const AnimalDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('https://b13-a08-az.vercel.app/data.json')
    const animals = await res.json()

    const animal = animals.find(a => a.id == id)

   

    return (
        <div className="flex justify-between max-w-106 gap-20 mx-auto">
            <Image src={animal.image}
            alt="animal.image"
            width={700}
            height={700} 
             className="rounded-3xl"
             >
               

            </Image>
        <div>
            
            <div className="relative w-full aspect-square">
           
                <Chip size="sm" className="absolute right-2 top-2">{animal.breed}</Chip>
            </div>

            <div>
                <h2 className="font-medium">{animal.name}</h2>
            </div>
  <p>{animal.description}</p>

           <div className="flex gap-5">
             <div className="flex items-center gap-2">
                <p><BiLocationPlus /></p>
                <p>{animal.location}</p>
            </div>

            <Separator orientation="vertical"/>


               <div className="flex items-center gap-2">
                <p><IoPricetag /></p>
                <p>{animal.price}</p>
            </div>
           </div>

    
            
        
        </div>
        </div>
    );
};

export default AnimalDetailsPage;