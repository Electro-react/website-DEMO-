import React from 'react'
import "./Card_css.css"

const Card=(props)=>{
    return <>
    <div className="card_css">
    <img src    = {props.source} alt={props.alt}/>      {/*insert your img url in props.source and alternate text in props.alt*/}
    <p>{props.cardtitle}</p>
    </div>                
    </>
}

export default Card;