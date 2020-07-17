import React from 'react'; 
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
const { default: PrimeraApp } = require("../PrimeraApp");



describe('Pruebas en <PrimeraApp />', () => {

/*     test('Debe mostrar el mensaje "Hola soy Goku"', () => {

        const saludo = 'Hola soy Goku';
        //para renderizar el componente y generar la prueba
        const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
        //agrego los !! para forzar el error
        expect(getByText(saludo + '!!')).toBeInTheDocument();
    }) */
    
    //UTILIZANDO ENZYME
    test('Debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola soy Goku';
        //shallow
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );
        //SE ESPERA QUE EL COMPONENTE SE RENDERICE IGUAL QUE EN LA PAGINA
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostar el subtitulo enviado por props', () => {
        
        const saludo  = 'Hola soy Goku';
        const subtitle = 'Soy un subtitulo';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo } 
                subtitulo={ subtitle }
            /> );

        const textoParrafo = wrapper.find('p').text();
        //console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitle);
    });
    
})
