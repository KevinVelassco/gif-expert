import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories }) => {

    const [categories, setCategoties] = useState(defaultCategories);

    return (
        <main>
            <header>
                <h1 className="title animate__animated animate__flash">GifExpert</h1>
                <AddCategory setCategories={setCategoties} />
            </header>
            <section>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </section>
        </main>
    );
}

GifExpertApp.propTypes = {
    defaultCategories: PropTypes.array
}

GifExpertApp.defaultProps = {
    defaultCategories: ['anime']
}
