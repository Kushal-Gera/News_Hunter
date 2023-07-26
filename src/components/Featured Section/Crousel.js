/* eslint-disable react/jsx-no-target-blank */
import React from "react";


const Crousel = (props)=>{
    function splitLastOccurrence(str, substring) {
        const lastIndex = str.lastIndexOf(substring);
        const before = str.slice(0, lastIndex);
        const after = str.slice(lastIndex + 1);
        return [before, after];
    }

    return (
        (!!props?.data || null) &&
        <div className="p-4 p-md-5 mb-4 mt-2 rounded-4 bg-body-white" style={{backgroundImage: `url(${props.data.urlToImage})`, width:"100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", boxShadow: "0px 4px 4px 0px #00000040, inset 0 0 0 1000px rgba(0,0,0,.5)" }} >
            <div className="col-lg-7 px-0">
                <h1 className="display-9 fst-italic text-white">
                    {splitLastOccurrence(props?.data?.title || '', '-')[0]}
                    <br />
                    <span className='text-warning' > -- {splitLastOccurrence(props?.data?.title || '', '-')[1]}</span>
                </h1>
                <p className="lead my-3 text-light">{props.data?.description?.substring(0, 150) || null}</p>
                <p className="lead mb-0"><a href={props.data.url} target="_blank" className="text-white fw-bold">Continue reading...</a></p>
            </div>
        </div>
    )
}

export {Crousel}