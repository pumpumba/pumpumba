import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const navbar = () => {
  return (
    <div className="navbar">
      <AnchorLink href="#Idea">Idea</AnchorLink>
      <AnchorLink href="#Project">Project</AnchorLink>
      <AnchorLink href="#Company">Company</AnchorLink>
    </div>
  )
}

export default navbar
