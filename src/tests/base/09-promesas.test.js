const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe('Prueba en 09-promesas.js', () => {
    
    test('getHeroeByIdAsync debe retornar un heroe Async y comparar el objeto de id=1 con el objeto en la posicion de array [0]', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect( heroe ).toBe(heroes[0]);
                done();
            })
    });

    test('getHeroeByIdAsync marca error cuando no coincide id con posicion ', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            });
    })
    
})