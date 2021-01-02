import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {

    test('Debe retornar el estado inicial', async() => {
        // const { data, loading } = useFetchGifs( 'One Punch' );
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'One Punch' ));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        // console.log( data, loading );

         expect( data ).toEqual( [] );
         expect( loading ).toBe( true );
    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'One Punch' ));
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

         expect( data.length ).toBe( 10 );
         expect( loading ).toBe( false );
    });   
});
