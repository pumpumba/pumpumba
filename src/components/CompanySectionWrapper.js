import React from 'react'

class CompanySectionWrapper extends React.Component {
  render() {
    return (
      <section id='company-info-wrapper'>
        <h3>{this.props.title}</h3>
        {this.props.children}
      </section>
    )
  }
}

export default CompanySectionWrapper