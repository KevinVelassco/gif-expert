import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategoties] = useState(['anime']);

    return (
        <main>
            <header>
                <h1 className="title">GifExpert</h1>
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
