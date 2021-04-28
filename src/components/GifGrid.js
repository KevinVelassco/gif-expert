import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setimages)
    }, [category]);

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