import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css'
// import PrimeraApp from './PrimeraApp';

//Accedo al div a donde renderizo mi componento
const divRoot = document.getElementById('root')
//renderizo y comunico componentes (envio un objeto de tipo number)
ReactDOM.render( <CounterApp  />, divRoot );
// ReactDOM.render( <PrimeraApp saludo={'Hola soy Goku '} />, divRoot );

