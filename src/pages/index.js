import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (

<div>
  <div className="Hero">
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
      <div className="HeroGroup">
        <h1>Design Hub</h1>
        <p>Digitális terméktervezés A-Z-ig. Kutatás, design, kód</p>
        <Link to="/page-2/">Megnézem az introt</Link>
      </div>    
    </div>
  <div className="Cards">
    <h2> Legújabb kurzusok </h2>
      <Card 
        title="Sketch alapjai"
        text="12 Rész, 3 óra videó"
        text="Formák és rétegek, vektorok, symbols, nested symbols, könyvtárak."
        text="Free"/>
    </div>
</div>
)

export default IndexPage
