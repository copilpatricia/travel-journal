import React from "react"


export default function Card(props) {
    return(
        <div className="card">
           <img src={props.imageUrl} className="card--img" alt=""/>
           <div className="card--info">
                <p className="card--location">{props.location}  
                    <a href={props.link} className="card--link"> View on Google Maps </a> 
                </p>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--dates">{props.dates}</p>
                <p className="card--description">{props.description}</p>
            </div>                  
        </div>
    )
}