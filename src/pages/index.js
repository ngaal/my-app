import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
   <div className="Hero">
    <div className="HeroGroup">
      <h1>Hi guys, my name is Norbi</h1>
      <p>I'm a product designer from Budapest. Holy shit, I started to code. Code as a cool designer!</p>
      <Link to="/page-2/">Download CV</Link>
    </div>    
   </div>
  </div>
)

export default IndexPage
