import React, {useState} from "react"
// import Header from "./componentes/Header"
// import Corpo from "./componentes/corpo"
import "./App.css"

export default function App() {
  const [num, setNum] = useState (10)
  return(
    <>
    <p>Valor do state: {num}</p>
    </>
  )
}