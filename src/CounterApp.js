// IMPORTO EL HOOK useState
import React, { useState } from 'react';
import PropTypes from 'prop-types'

/***1*** EVENTOS al btn para definir la accion creo una expresion de JS, coloco entre llaves la funcion que se va a ejecutar { () => console.log('+1') }
---> LA FUNCION DE onClick RECIBE UN event (e) => { }
***2*** PUEDO EXTRAER LA FUNCION DEL EVENTO Y COLOCARLA ANTES PARA MAS COMODIDAD
***3*** DENTRO DE onClick SOLO DEJO LA REFERENCIA A LA FUNCION QUE EXTRAJE PREVIAMENTE
***4*** TENER CUENTA QUE DENTRO DE onClick={} NO! SE HACE UN LLAMADO A LA FUNCION,  SOLAMENTE ES UNA REFERENCIA! -> onClick={ handleAdd }
***5*** SI COLOCARA LA REFERENCIA COMO UNA FUNCION DEBERIA REALIZAR LO SIG:
    <button onClick={ handleAdd() }>+1</button>
    LA FUNCION EXTRAIDA DEBERIA RETORNAR UNA FUNCION
        const handleAdd = (e) => {
        return () => console.log('Este es el retorno')
    }
*/

//declaro mi functional component
const CounterApp = ( { value = 10} ) => {

    //AGREGO UN HOOK
    const [counter, setCount] = useState(value)

    // Extraer la funcion del evento para trabajar mas comodo
    const handleAdd = () => setCount(counter + 1);
    const handleSub = () => setCount(counter -1 );
    const handleReset = () => setCount(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>Counter = { counter }</h2>

            <button className="btn blue" onClick={ handleSub }>Remove</button>
            <button className="btn red" onClick={ handleReset }>Reset</button>
            <button className="btn green" onClick={ handleAdd }>Add</button>
        </>
    );
}

CounterApp.propType = {
    value: PropTypes.number
}

export default CounterApp;
