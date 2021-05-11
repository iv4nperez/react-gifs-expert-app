import React from 'react';
import  "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas al componente GifGridItem', () => {
    const title ='Un titulo';
    const url   ='https//localhost:20000'
    let wrapper = shallow( <GifGridItem title={ title } url={ url }  /> );
    
    test('debe de mostrar correctamente el componente <GifGridItem/> ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el titulo', () => {
       const p = wrapper.find('p');
       expect( p.text().trim() ).toBe( title );
    });
    
    test('debe de ser una imagen, tener un src y un alt asignado', () => {
        const img = wrapper.find('img');
        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title );
    });
    
    test('debe de tener la clase animate__fadeIn', () => {
    
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes( 'animate__fadeIn' ) ).toBe( true );
    });
    
    
    
});
