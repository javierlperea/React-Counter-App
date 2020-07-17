import React from 'react';
const { shallow } = require("enzyme")
const { default: CounterApp } = require("../CounterApp")


describe('Pruebas en <CounterApp />', () => {
    
    let wrapper = shallow( <CounterApp /> );
    //esta funcion se repite antes de cada test
    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('Debe mostrar <CounterApp /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto 100', () => {

        const wrapper = shallow( <CounterApp value={100} />);
        const counterText = wrapper.find('h2').text().trim();  // <--- al texto del h2 le elimina los espacios
        expect( counterText ).toBe('Counter = 100');
    });
    
    test('Debe incrementar con el boton add', () => {
        //busca los btn segun su posicion 0,1,2
        //con simulate puedo simular el evento click sobre el btn
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('Counter = 11');
    });

    test('Debe decrementar con el boton remove', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('Counter = 9');
    });
    
    test('Debe colocar el valor por defecto con reset', () => {
        
        const wrapper = shallow( <CounterApp value={105} />);

        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('Counter = 105')
    })
    

    
})
