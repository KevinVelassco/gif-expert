import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategoties] = useState(['Black Clover']);

    return (
        <main>
            <header>
                <h1>GifExpertApp</h1>
                <AddCategory setCategories={setCategoties} />
            </header>
            <hr />
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
