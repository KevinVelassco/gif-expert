import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test component <GifGrid />', () => {

    const category = 'anime';

    test('Debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan las imágenes con useFetchGifs', () => {

        const gifs = [
            {
                id: 'sd312desad1',
                title: 'cualquier cosa',
                url: 'https://localhost/cualquier/cosa.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.loading').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });

});