import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiDownload, BiLocationPlus } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { IoPricetag } from "react-icons/io5";
const AnimalCard = ({animal}) => {
    return (
        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
            <Image
                src={animal.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={animal.name}
                className="object-cover rounded-xl"
                />

                <Chip size="sm" className="absolute right-2 top-2">{animal.breed}</Chip>
            </div>

            <div>
                <h2 className="font-medium">{animal.name}</h2>
            </div>

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

     <Link href={`/all-photos/${animal.id}`}>      <Button variant="outline" className={'w-full'}>View</Button></Link>
            
        </Card>
    );
};

export default AnimalCard;