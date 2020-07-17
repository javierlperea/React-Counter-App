const { retornaArreglo } = require('../../base/07-deses-arr');


describe('Prueba en desestructuracion de array', () => {
    
    test('Debe retornar un string y un numero ', () => {
        
        //comparo todo el contenido del array
        const arr = retornaArreglo();
        expect(arr).toEqual( ['ABC', 123] );

        //Desestructuro el array y lo analizo por partes
        const [letras, numeros] = retornaArreglo();

        //usando console.log(typeof letras) puedo saber el valor de retorno para usar en expect()
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number'); 

    })
    
})
