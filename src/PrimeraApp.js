/* EL SNIPET rafcp CREA TOOOODO DE MANERA AUTOMATICA */


// import React quita el error -> React debe estar en el DOM cuando se utiliza JSX
import React from 'react';  // <--- manera rapida de importar (imr + TAB)  
import PropTypes from 'prop-types'


// ESTO ES UN FUNCTIONAL COMPONENT (recibe un objeto como parametro)
const PrimeraApp = ( {saludo, subtitulo} ) => {

    return (    // <-- solo puede retornar un elemento por vez, por eso las ( )
        <>       
            <h1>{ saludo }!!!</h1>
            <p>{ subtitulo }</p>
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
    subtitulo: 'Soy un subtitulo',
}

export default PrimeraApp;