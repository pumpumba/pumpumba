import React from 'react'

class CompanySectionWrapper extends React.Component {
  render() {
    return (
      <section id='company-section-wrapper'>
        <h3>{this.props.title}</h3>
        <div className='employee-images'>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default CompanySectionWrapper