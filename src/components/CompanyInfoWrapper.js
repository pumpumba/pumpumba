import React from "react"
import CompanySectionWrapper from './CompanySectionWrapper'

const CompanyInfoWrapper = (props) => {
  return (
    <section id='company-info-wrapper'>
        <CompanySectionWrapper title={'Management'} />
        <CompanySectionWrapper title={'P&S'} />
        <CompanySectionWrapper title={'R&D'} />
    </section>
  )
};

export default CompanyInfoWrapper