import React from 'react'
import { FloatingColumn } from './FloatingColumn'
import { NewsCard } from './MedPost'

const Body = (props) => {
  return (
    <div id='body' class='row'>
      <div class='col-md-8'>
        <h3 class='pb-4 mb-4 fst-italic border-bottom'>You might have missed!</h3>

        <div class="row">
            {props.data.map((newsItem)=>{
                return <NewsCard data={newsItem} />
            })}
        </div>

      </div>

      <div class='col-md-4'>
        <FloatingColumn data={props.worldNewsPosts} />
      </div>

    </div>
  )
}

export { Body }
