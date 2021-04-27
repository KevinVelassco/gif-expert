import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?api_key=ADWbaWzWxzmvj1RwlWZuVgLZIRSizaU3&q=one piece";

        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map(img => ({ id: img.id, title: img.title, url: img.images?.downsized_medium.url }));

        setimages(gifs);
    }

    return (
        <>
            <h2>{category}</h2>
            <div className="panel">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    );
}