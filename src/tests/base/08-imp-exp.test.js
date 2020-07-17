const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");


describe('Prueba en funcion heroes', () => {
    
    test('debe retornar un heroe por su id ', () => {

        const id = 7;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(her => her.id === id);

        expect(heroe).toBe(heroeData)
    })

    test('Debe retornar undefined si el heroe no existe', () => {
        const id = 7;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined)
    })
    
    test('Debe comparar que los heroes retornados sean iguales', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroReturned = heroe.filter( (hero) => hero.owner === owner);

        expect(heroe).toEqual(heroReturned);
    })

    test('Debe comparar la cantidad de objetos que sean propietarios de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes.length).toBe(2);
    })
})