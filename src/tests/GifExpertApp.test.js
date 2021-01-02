import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
    
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow( <GifExpertApp /> ); 

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de mostrar una lista de categorías', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> ); 

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });  
});
