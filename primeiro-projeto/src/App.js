import React from "react"
import eu from "./componentes/imgs/foto.jpeg"

export default function App() {
  const curso=()=>{
    return ("Aprendendo React")
  }
  function canal() {
    return "CFB Cursos"
  }
  return(
    <>
      <p>Estou {curso()}</p>
      <p>{"Com " + canal()}</p>
      <img src={eu}/>
      <img src="./imgs/foto1.png"/>
    </>
  )
}