import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section'

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
        <h1>Boost.</h1>
        <p>Moduláris, gyakorlati workshopok designerektől, designerekenek.</p>
        <Link to="/page-2/">Megnézem az introt</Link>
    </div>
  </div>
  <div className="Cards">
    <h1> workshopok </h1>
    <div className="CardGroup">
      <Card
        title="Sketch alapjai I."
        caption="12 Rész, 3 óra videó"
        description="Formák és rétegek, vektorok, symbols, nested symbols, könyvtárak."
        price="Free"
        image={require('../images/card.png')}/>
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
  <div> 
  </div>
  <Section 
    image={require('../images/wallpaper-grey.png')}
    icon={require('../images/icon-1.png')}
    title="Designertől Designereknek"
    text="Kizárólag olyan designerek faciitálnak, akik kiemelkedő eredményeket értek el az adott területen."
  
    icon={require('../images/icon-2.png')}
    title="Moduláris"
    text="Workshopjaink tematikusak, így egy adott témára fókuszálva intenzív és mély tudás átadható."
  
    icon={require('../images/icon-3.png')}
    title="Egyénekre fókuszált"
    text="Kiscsoportos limitált létszámban megrendezett események biztosítják az egyéni időt."
  />
</div>
)

export default IndexPage
