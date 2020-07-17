// Permite utilizar JSX en el DOM
import React from 'react';
import ReactDOM from 'react-dom';
// Importo el archivo que contiene FC (functional component)
import PrimeraApp from './PrimeraApp';
// Importo los estilos utiliza el path y la terminacion .css
import './index.css'

const divRoot = document.querySelector('#root');

/****** las PROPS (propiedades) son enviadas del padre hacia el functional component
---> Necesito renderizar en el ReactDOM lo que quiero que se muestre en la pagina
---> Es importante colocar el nombre del componente que usamos entre <PrimeraApp /> dentro del componente padre
---> 
 */


// <PrimeraApp /> es el componente Padre
// Aca se insertan las props que aparecen en components (junto a consola)
// Dentro del componente padre se realiza la comunicacion entre componentes
ReactDOM.render( <PrimeraApp />, divRoot)