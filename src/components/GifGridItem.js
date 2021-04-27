import React from 'react';

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card">
            <div className="card__imgContainer">
                <img src={url} alt={title} className="card__img" />
            </div>
            <div className="card__InfoContainer">
                <p>{title}</p>
            </div>
        </div>
    )
}
