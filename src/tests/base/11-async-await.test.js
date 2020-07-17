const { getImagen } = require("../../base/11-async-await")

describe('Pruebas con Async- Await y Fetch', () => {
    
    test('Debe retornar el url de la imagen', async() => {
        //sin await no funciona
        const url = await getImagen();

        console.log(url)

        expect(typeof url).toBe('string');
    })
    
})
