/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react"

const NewsCard = (props)=>{
    return (
        <div className="col-lg-6 col-md-6 col-xs-10 mx-auto mb-3">
            <div className="card rounded-4" style={{alignItems:"center", height:"350px"}}>
                <img className="rounded-4" src={props?.data?.urlToImage} style={{width:"100%", height:"100%", objectFit:'cover'}} alt="" />
                <div className="mx-2 p-2 rounded-2" style={{position:"absolute", bottom:"20px", backgroundColor:"white", border:"solid black 1px"}}>
                    <a href={props.data.url} className="fw-bold text-warning text-decoration-none stretched-link">{props?.data?.source.name}</a>
                    <h6> {props?.data?.title} </h6>
                </div>
            </div>
        </div>
    )
}

export {NewsCard}

