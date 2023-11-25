// kwnenkr
import React from "react"
import ReactDOM  from "react-dom";
import PrimeraApp from "./PrimeraApp";
import './index.css'
import { CounterApp } from "./CounterApp";
//import { GetTeamById , function_With_Async_Await} from "./base/functions";

// const saludo = <h1>Hello World</h1>;

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp  />,divRoot);
// ReactDOM.render(<PrimeraApp name='Hola soy Carlos' />,divRoot);

// console.table(GetTeamById(2));
// console.log(function_With_Async_Await());


// console.log(saludo);