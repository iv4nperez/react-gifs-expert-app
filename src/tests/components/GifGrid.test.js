import React from 'react';
import  "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas para el componente <GifGrid />', () => {
    
    useFetchGifs.mockReturnValue({
        data:[],
        loading: true
    });

    let category = 'One Punch Man';
    let wrapper = shallow( < GifGrid category={ category } /> );

    test('debe de renderizar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
   
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
       
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cosa/p.jpg',
                title: 'cualquier cosa'
            },
            {
                id: '123',
                url: 'https://localhost/cosa/p.jpg',
                title: 'cualquier cosa'
            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        let wrapper = shallow( < GifGrid category={ category } /> );
        
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });

    
});