import React from 'react'
import './card.css'

const Card = props => (
    <div className="Card">
        <h3>{props.title}</h3>
        <p className="Caption">{props.caption}</p>
        <p className="Description">{props.description}</p>
        <p className="Price"><span>{props.price}</span></p>
        <img src={props.image}></img>
    </div>
)

export default Card