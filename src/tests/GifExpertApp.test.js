import React from 'react';
import  "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en GifExpertApp',() => {

    let wrapper = shallow( <GifExpertApp /> );
    test('debe de mopstrarse correctamente el componente', () => {

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['One Punch','Dragon Ball']
        wrapper = shallow( <GifExpertApp defaulCategory={ categories } /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
        
    });
    
});