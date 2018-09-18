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

        const pnSDetails = [
            {
                name: 'Herman Eklund',
                title: 'Quality Coordinator'
            },
            {
                name: 'Michelle Hellmark Carrasco',
                title: 'Lead Analyst'
            },
            {
                name: 'Vendela Egondotter',
                title: 'Analyst'
            },
            {
                name: 'Matilda Wolf',
                title: 'Analyst'
            },
            {
                name: 'Ludwig Kenell',
                title: 'Analyst'
            },
            {
                name: 'Katarina Luu',
                title: 'Deployment Manager'
            },
            {
                name: 'Jesper Hedlund',
                title: 'Data Scientist'
            },
            {
                name: 'Yu Hi',
                title: 'Tester'
            },
            {
                name: 'Gustaf Sagent',
                title: 'Tester'
            }
        ]

        const pnSImages = pnSDetails.map(person => {
            return <EmployeeImage name={person.name} title={person.title} image={require(`../../images/${person.name.replace(/ /g, '')}.jpg`)} />
        })

        return (
            <section id='company-info-wrapper'>
                <CompanySectionWrapper title={'Management'}>
                    {managmentImages}
                </CompanySectionWrapper>
                <CompanySectionWrapper title={'P&S'}>
                    {pnSImages}
                </CompanySectionWrapper>
                <CompanySectionWrapper title={'R&D'} />
            </section>
        )
    }
}

export default CompanyInfoWrapper