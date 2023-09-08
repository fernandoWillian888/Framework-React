import React from "react"

export default function Dados(props) {
    let v1 = 10
    let v2 = 5
    return (
        <section>
            <p>Canal:{props.canal()}</p>
            <p>Youtube:{props.youtube}</p>
            <p>Curso:{props.curso}</p>
            <p>{"A Soma de "+v1+" com "+v2+" é igual a "+props.somar(v1, v2)}</p>
        </section>
    )
}