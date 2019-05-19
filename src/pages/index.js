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
        <h1>Hungarian UI/UX Designers Camp</h1>
        <p>Digitális terméktervezés A-Z-ig. Kutatás, design, kód</p>
        <Link to="/page-2/">Megnézem az introt</Link>
    </div>
  </div>
  <div className="Cards">
    <h2> Legújabb kurzusok </h2>
    <div className="CardGroup">
      <Card
        title="Sketch alapjai I."
        caption="12 Rész, 3 óra videó"
        description="Formák és rétegek, vektorok, symbols, nested symbols, könyvtárak."
        price="Free"
        image={require('../images/card.png')} />
      <Card
        title="Product Design I."
        caption="9 Rész, 5 óra videó"
        description="IOS design guideline, tipográfia, színek, ikonok, komponensek, tervezés különböző eszközökre"
        price="18.990Ft"
        image={require('../images/card-1.png')} />
      <Card
        title="Product Design I."
        caption="9 Rész, 5 óra videó"
        description="IOS design guideline, tipográfia, színek, ikonok, komponensek, tervezés különböző eszközökre"
        price="18.990Ft"
        image={require('../images/card-1.png')} />
      <Card
        title="Product Design I."
        caption="9 Rész, 5 óra videó"
        description="IOS design guideline, tipográfia, színek, ikonok, komponensek, tervezés különböző eszközökre"
        price="18.990Ft"
        image={require('../images/card-1.png')} />
    </div>
  </div>
</div>
)

export default IndexPage
