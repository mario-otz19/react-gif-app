import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';
    
describe('Pruebas en <GifGridItem />', () => {

    const title = 'Título de la imagen';
    const url = 'https://localhost/lgo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('Debe de mostrar el componente correctamente', () => {        
        expect(wrapper).toMatchSnapshot(); 
    });    

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.html()); 
        // console.log(img.props()); 
        // console.log(img.props().src); 
        // console.log(img.prop('src')); 
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        // console.log(div.props().className.includes('animate__fadeIn'));
        expect(div.props().className.includes('animate__fadeIn')).toBe(true);
    }); 
});
