import React from 'react'
import CompanySectionWrapper from './CompanySectionWrapper'
import EmployeeImage from './EmployeeImage'

class CompanyInfoWrapper extends React.Component {

    render() {

        const managmentDetails = [
            {
                name: 'Carl Älmeby',
                title: 'Project Leader'
            },
            {
                name: 'Elliot Magnusson',
                title: 'Product manager'
            },
            {
                name: 'Isak Jansson',
                title: 'R&D Manager'
            }
        ]

        const managmentImages = managmentDetails.map(person => {
            return <EmployeeImage name={person.name} title={person.title} image={require(`../../images/${person.name.replace(/ /g, '')}.jpg`)} />
        })

        return (
            <section id='company-info-wrapper'>
                <CompanySectionWrapper title={'Management'}>
                    {managmentImages}
                </CompanySectionWrapper>
                <CompanySectionWrapper title={'P&S'}>
                </CompanySectionWrapper>
                <CompanySectionWrapper title={'R&D'} />
            </section>
        )
    }
}

export default CompanyInfoWrapper