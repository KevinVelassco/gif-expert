import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Test componet <GifGridItem />', () => {

    const title = 'title imagen';
    const url = 'https://imagen.png';

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('El atributo src del <img/> debe tener como valor el prop url', () => {
        const img = wrapper.find('img');
        expect(img.prop("src")).toBe(url);
    });

    test('El atributo alt del <img/> debe tener como valor el prop title', () => {
        const img = wrapper.find('img');
        expect(img.prop("alt")).toBe(title);
    });

    test('El contenedor de la etiqueta <img/> debe tener className card__imgContainer', () => {
        const container = wrapper.find('img').parent();

        expect(container.hasClass("card__imgContainer")).toBe(true);

    });
});