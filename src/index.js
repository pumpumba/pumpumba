import React from "react"
import ReactDOM from "react-dom"
import Header from "./component/Header"

import './styles/main.scss'

const Index = () => {
  return (
    <Header/>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"))
