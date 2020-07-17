//importo una libreria para que me autocomplete los metodos
import '@testing-library/jest-dom';
// Importo la funcion desde su path
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.test.js', () => {
    
    test('Deberia retornar Hola Fernando ', () => {

        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);


        expect(saludo).toBe(`Hola ${nombre}!`);

    })
    
    test('La salida por defecto deberia ser Hola Carlos', () => {
        
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');

    })
    

})
