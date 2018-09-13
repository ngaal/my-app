import React from 'react'

const card = props => (
    <div className="Card">
        <h3>{props.title}</h3>
        <p className="caption">{props.text}</p>
        <p>{props.text}</p>
        <p className="Price">{props.text}</p>
        <img src={props.image}></img>
    </div>
)

export default Card