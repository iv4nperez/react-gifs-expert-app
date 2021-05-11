import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hooks useFetchGifs',()=>{
    let category = 'One Punch man'
    test('debe de retornar el estado inicial',async  () => {
       
        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs( category ))
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    });
    
    test('debe de retornar una arreglo de iamgenes y el loading en false',async () => {
        
        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs( category ))
        
        await waitForNextUpdate();

        
        const { data, loading } = result.current;
  
        expect( data.length ).toBe(10);
        expect( loading ).toBe( false );
        
    });
    

});