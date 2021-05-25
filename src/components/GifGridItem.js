import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card  animate__animated animate__flip">
            <div className="card__imgContainer">
                <img src={url} alt={title} className="card__img" />
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired

}
