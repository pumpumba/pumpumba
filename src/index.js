import React from "react"
import ReactDOM from "react-dom"
import PageSection from './components/PageSection'

import './styles/main.scss'

const Index = () => {
  return (
    <main>
      <PageSection title={'Idea'} copy={'text'}  />
      <PageSection title={'Project'} copy={'text'} />
      <PageSection title={'Company'} copy={'text'} />
    </main>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"))