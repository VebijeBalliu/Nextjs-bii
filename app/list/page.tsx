'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";


interface Dog {
    id: number;
    name: string;
    image?: {
        url: string;
    };
    bred_for?: string;
}

const DogList: React.FC = () => {
    const [dogs, setDogs] = useState<Dog[]>([]); 

    useEffect(() => {
        const fetchDogData = async () => {
            try {
                const res = await fetch("https://api.thedogapi.com/v1/breeds");
                const data = await res.json();
                setDogs(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDogData();
    }, []);

    return (
        <>
            <section className="container py-5">
                <div className="text-center">
                    <h1 className="fs-0 fw-bold text-black">List of All Dogs</h1>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 my-4">
                    {dogs.map((dog) => (
                        <div className="col mb-4" key={dog.id}>
                            <Link href={`/dogs/${encodeURIComponent(dog.name)}`}>
                                <div className="card bg-dark text-white h-100">
                                    <img
                                        src={dog.image?.url || "fallback-image-url.jpg"}
                                        alt={dog.name}
                                        className="card-img-top"
                                        loading="lazy"
                                    />
                                    <div className="card-body">
                                        <h3 className="card-title">{dog.name}</h3>
                                        <p className="card-text">Bred For: {dog.bred_for || "Unknown"}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default DogList;
