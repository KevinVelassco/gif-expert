import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            { loading && <p>Loading</p>}
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