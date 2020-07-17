/* EL SNIPET rafcp CREA TOOOODO DE MANERA AUTOMATICA */


// import React quita el error -> React debe estar en el DOM cuando se utiliza JSX
import React from 'react';  // <--- manera rapida de importar (imr + TAB)  
import PropTypes from 'prop-types'

/* EXISTEN COMOPONENTES BASADOS EN FUNCIONES Y EN CLASES
---> REACT USA COMPONENTES BASADOS EN FUNCIONES (FUNCTIONAL COMPONENTS)
---> JSX es la combinacion de HTML y XML, cuando usamos HTML en react requiere la importacion de este ultimo para escribir HTML dentro del DOM
---> No necesito utilizar <Fragment /> porque requiere una importacion ( de esta forma import React, { Fragment } from 'react'; )
---> 1- En lugar de usar <Fragment />, uso <> </> sin nada, tambien es un fragment
---> 2- props son los parametros que tiene el FC
---> 2- EL FC RECIBE UN OBJETO COMO ARGUMENTO POR ESO LO DESESTRUCTURO (PONGO DENTRO DE LLAVES {} ) Y YA NO NECESITO USAR -> props.saludo DENTRO DE H1
---> 4- LOS PROPTYPES SON TIPOS DE PROPIEDADES QUE USO PARA OBLIGAR P.EJ. A QUE SE MANDE UN SALUDO DESDE EL COMPONENTE PADRE O ESPECIFICAR DE QUE TIPO DEBE EL OBJETO ENVIADO DESDE EL PADRE ( <PrimeraApp /> )
---> 5- DEBO IMPORTAR -> import PropTypes from 'prop-types' O NO FUNCIONA!!!
---> 6- EXISTEN PROPIEDADES POR DEFECTO QUE PUEDEN SER AGREGADAS AL OBJETO RECIBIDO COMO PARAMETRO DE LA SIGUIENTE FORMA {saludo='por defecto'} TAMBIEN PUEDEN AGREGARSE DEBAJO DE LAS PropTypes USANDO ->
PrimeraApp.defaultProps = { saludo: 'Soy un valor por defecto }
*/


// ESTO ES UN FUNCTIONAL COMPONENT (recibe un objeto como parametro)
const PrimeraApp = ( {saludo='por defecto'} ) => {

    return (    // <-- solo puede retornar un elemento por vez, por eso las ( )
        <>       {/* <-- esto es un fragment de forma corta*/}

            <h1> { saludo } </h1>
            <button onClick={ (e) => console.log(e) } >+1</button>

        </>
    );
}

/***** Condiciones que le impongo a otra persona que quiera trabajar con mis componentes
Desde aca condiciono el/los argumentos que se envian al componente(functional component) */
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}
//AGREGO PROPS POR DEFECTO A LOS ARGUMENTOS DE ESTA FORMA
PrimeraApp.defaultProps = {
    saludo: 'Soy un valor por defecto, cuando no se envian props desde el padre',
}

export default PrimeraApp;