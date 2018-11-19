import React from 'react'
import CompanySectionWrapper from './CompanySectionWrapper'
import EmployeeImage from './EmployeeImage'

class CompanyInfoWrapper extends React.Component {

    render() {

        const managmentDetails = [
            {
                name: 'Carl Älmeby',
                title: 'Project Leader',
                mail: 'caral113@student.liu.se'
            },
            {
                name: 'Elliot Magnusson',
                title: 'Product manager',
                mail: 'ellma121@student.liu.se'
            },
            {
                name: 'Isak Jansson',
                title: 'R&D Manager',
                mail: 'isaja339@student.liu.se'
            }
        ]

        const managmentImages = managmentDetails.map(person => {
            return <EmployeeImage name={person.name} title={person.title} mail={person.mail} image={require(`../../images/${person.name.replace(/ /g, '')}.jpg`)} />
        })

        const communicationDetails = [
            {
                name: 'Sofie Bengtsson',
                title: 'Document Responsible'
            },
            {
                name: 'Oscar Andreasson',
                title: 'Communications manager / Line manager',
                mail: 'oscan887@student.liu.se'
            },
            {
                name: 'Daniel Gibbs',
                title: 'Technical Writer'
            }
        ]

        const communicationImages = communicationDetails.map(person => {
            return <EmployeeImage name={person.name} title={person.title} mail={person.mail} image={require(`../../images/${person.name.replace(/ /g, '')}.jpg`)} />
        })

        const pnSDetails = [
            {
                name: 'Herman Eklund',
                title: 'Quality Coordinator',
                mail: 'herek750@student.liu.se'
            },
            {
                name: 'Michelle Hellmark Carrasco',
                title: 'Lead Analyst',
                mail: 'micca780@student.liu.se'
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
                title: 'Deployment Manager',
                mail: 'katlu116@student.liu.se'
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
            return <EmployeeImage name={person.name} title={person.title} mail={person.mail} image={require(`../../images/${person.name.replace(/ /g, '')}.jpg`)} />
        })

        const rndDetails = [
            {
                name: 'Ludwig Thaung',
                title: 'Architect'
            },
            {
                name: 'Elon Brange',
                title: 'Lead Developer',
                mail: 'elobr959@student.liu.se'
            },
            {
                name: 'Erik Ståhl',
                title: 'Configuration / Environmental Manager '
            },
            {
                name: 'Filip Cornell',
                title: 'Data Engineer / Developer'
            },
            {
                name: 'Marcus Storm',
                title: 'Developer'
            },
            {
                name: 'Alexander Barbaranelli',
                title: 'Developer'
            },
            {
                name: 'Henrik Fredriksson',
                title: 'Developer'
            },
            {
                name: 'Jonatan Bjurenfalk',
                title: 'Developer'
            },
            {
                name: 'Jonas Olaussen',
                title: 'Lead Designer / Lead Front-End',
                mail: 'jonol044@student.liu.se'
            },
            {
                name: 'Linnea Sjögren',
                title: 'Designer / Front-End'
            },
            {
                name: 'Mårten Hakkestad',
                title: 'Designer / Front-End'
            }
        ]

        const rndImages = rndDetails.map(person => {
            return <EmployeeImage name={person.name} title={person.title} mail={person.mail} image={require(`../../images/${person.name.replace(/ /g, '')}.jpg`)} />
        })

        return (
            <section id='company-info-wrapper'>
                <CompanySectionWrapper title={'Management'}>
                    {managmentImages}
                </CompanySectionWrapper>
                <CompanySectionWrapper title={'Communications'}>
                    {communicationImages}
                </CompanySectionWrapper>
                <CompanySectionWrapper title={'P&S'}>
                    {pnSImages}
                </CompanySectionWrapper>
                <CompanySectionWrapper title={'R&D'}>
                    {rndImages}
                </CompanySectionWrapper>
            </section>
        )
    }
}

export default CompanyInfoWrapper
