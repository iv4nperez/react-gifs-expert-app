import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wraper = shallow( <AddCategory setCategories={ setCategories }  /> );

    beforeEach(()=>{
        jest.clearAllMocks();
        wraper = shallow( <AddCategory setCategories={ setCategories }  /> );
    });

    test('debe de mostrase correctamente', () => {
        expect( wraper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
       
        const input = wraper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {  target: { value } });
        
    });
    
    test('no debe de postear la informacion onSubmit', () => {
       
        wraper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
       
        const input = wraper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {  target: { value } });

        wraper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).toHaveBeenCalled();

        expect( input.prop('value').trim() ).toBe( '' );
    });
    

});