import React from "react"

class PageSection extends React.Component {

    render() {
        return (
            <section id={this.props.title} className='page-section'>
                <h2>{this.props.title}</h2>
                <p>{this.props.copy}</p>
                {this.props.children}
            </section>
        )
    }
};

export default PageSection