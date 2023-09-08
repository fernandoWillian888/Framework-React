import React from 'react'
import Dados from "./Dados"

export default function Corpo(){
    const cnl=()=> {
        return ( 
        " CFB Cursos"
        )
    }
    const soma=(v1, v2)=> {
        return (
            v1+v2
        )
    }
    const yt = " youtube.com/cfbcursos"
    const crs = " React.js"
    return (
        <section>
            <h2>Curso de React</h2>
            <p>Teste</p>
            <Dados canal={cnl} youtube={yt} curso={crs} somar={soma}/>
        </section>
    )
}