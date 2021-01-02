import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
    
    const category = 'One Punch';

    test('Debe de mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } />);
        
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {        
        const gifs = [{
            id: 'ABC',
            title: 'Cualquier cosa :)',
            url: 'https://localhost/cualquier/cosa.jpg'
        },
        {
            id: '123',
            title: 'Cualquier cosa :)',
            url: 'https://localhost/cualquier/cosa.jpg'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category } />); 

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });    
});



