import React from "react"

const PageSection = (props) => {
  return (
    <section id={props.title} className='page-section'>
      <h2>{props.title}</h2>
      <p>{props.copy}</p>
    </section>
  )
};

export default PageSection