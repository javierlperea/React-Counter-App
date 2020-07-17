//describe agrega una descripcion a los test que realizo
describe('Pruebas en el archivo demo.test.js', () => {
    
    //toda prueba utiliza el test -> ('que realizo', codigo)
    test( 'deben ser iguales los strings', () => {
    
        // 1. inicializacion (preparacion de lo que quiero hacer)
        const mensaje = 'Hola Mundo';
    
        //2. estimulo ()
        const mensaje2 = `Hola Mundo`;
    
        //3. Observar el comportamiento (lo que espero que suceda) 
        expect(mensaje).toBe(mensaje2); // mensaje === mensaje2 <- compara

    })

})

