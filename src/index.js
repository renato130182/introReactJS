import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import ComponenteA from "./ComponenteA"
import ComponenteB from "./ComponenteB"
import "./styles.css"

function sum(a,b) {
    return a+b;
}

function sumAlert(a,b) {
    alert(a+b);
}

function primeiroJSX () {
    return (
        <div className='teste'>
            Renato Soares - Introdução ao ReactJs com Bruno Carneiro,
            <h1>Soma: {sum(5,5)}</h1>
        </div>
    )
}

// elementspodem ser qualquer componentes como string ou tags html
const CompStr = "Digital inn ovation One";
const compTagH1 = <h1>Tag H1 componentes</h1>

const App = () => {
    return(
        <div className="App">
            {primeiroJSX()}
            {CompStr}
            {compTagH1}
            <Button onClick={() => {
                sumAlert(16,7);
            } } name= "Clique aqui" />
            // conponentes podem conter outros componentes
            <ComponenteA>
                <ComponenteB>
                    <Button onClick={() => {sumAlert(33,5);} } name= "Clique outra Soma" />
                </ComponenteB>
            </ComponenteA>
        </div>
    )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);