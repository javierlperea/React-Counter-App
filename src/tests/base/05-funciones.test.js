import {getUser, getUsuarioActivo} from '../../base/05-funciones';

describe('Prueba en 05-funciones.test.js', () => {
    
    test('getUser debe retornar un objeto ', () => {

        const user = getUser();
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        expect(userTest).toStrictEqual(user)
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = 'Pedro';

        const getUser = getUsuarioActivo(nombre);
        
        const userName = {
            uid: 'ABC567',
            username: nombre
        };

        expect(getUser).toEqual(userName);

        //esta forma es lo mismo que arriba pero con menos codigo (no declaro userName)
        expect(getUser).toEqual( {
            uid: 'ABC567',
            username: nombre
        });

    })
    
})
