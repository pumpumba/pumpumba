import React from 'react'
import CompanySectionWrapper from './CompanySectionWrapper'
import EmployeeImage from './EmployeeImage'

class CompanyInfoWrapper extends React.Component {

    render() {

        let managementNames = ['Jonas Olaussen', 'Jonas Olaussen', 'Jonas Olaussen']
        const managmentImages = managementNames.map(name => {
            return <EmployeeImage name={name} image={require(`../../images/${name.replace(/ /g,'')}.jpg`)}/>
        })

        return (
            <section id='company-info-wrapper'>
                <CompanySectionWrapper title={'Management'}>
                    {managmentImages}
                </CompanySectionWrapper>
                <CompanySectionWrapper title={'P&S'} />
                <CompanySectionWrapper title={'R&D'} />
            </section>
        )
    }
}

export default CompanyInfoWrapper