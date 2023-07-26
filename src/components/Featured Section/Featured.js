import React from 'react'
import { BigPost } from './BigPost'
import { Crousel } from './Crousel'

const Featured = (props) => {
    return (
        <>
            <Crousel data={props.data[0]} />

            <div className="row mb-2">
                <BigPost data={props.data[1]} />
                <BigPost data={props.data[2]} />
            </div>
        </>
    )
}

export { Featured }
