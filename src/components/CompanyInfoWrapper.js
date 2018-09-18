import React from "react"
import CompanySectionWrapper from './CompanySectionWrapper'
import EmployeeImage from "./EmployeeImage";

class CompanyInfoWrapper extends React.Component {

    render() {

        let names = ['Jonas Olaussen', 'Elliot Magnusson', 'Isak Jansson']
        const EmployeeImages = names.map(name => {
            return <EmployeeImage name={name} image={require(`../../images/JonasOlaussen.jpg`)}/>
        })

        return (
            <section id='company-info-wrapper'>
                <CompanySectionWrapper title={'Management'}>
                    {EmployeeImages}
                </CompanySectionWrapper>
                <CompanySectionWrapper title={'P&S'} />
                <CompanySectionWrapper title={'R&D'} />
            </section>
        )
    }
};

export default CompanyInfoWrapper