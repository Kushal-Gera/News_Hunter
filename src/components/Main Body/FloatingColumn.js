/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { MiniPost } from './MiniPost'

const FloatingColumn = (props) => {
  return (    
        <div class="position-sticky sticky-top" style={{top: "30px"}}>
            <div class="p-4 mb-3 rounded-4 bg-warning">
                <h4 class="fst-italic">From The World</h4>
                <p class="mb-0"> Get all information, updates, and reports about events, developments, and trends that impact the world in a glance! </p>
            </div>

            <div className='mt-md-5'>
                <h4 class="fst-italic">Recent Posts</h4>
                    <ul class="list-unstyled">
                        <MiniPost data={props.data[0]}/>
                        <MiniPost data={props.data[1]}/>
                        <MiniPost data={props.data[2]}/>
                    </ul>
            </div>

            <div class="py-4">
                <h4 class="fst-bold">Usefull Links</h4>
                <ol class="list-unstyled">
                    <li><a href='https://github.com/Kushal-Gera/NewsHunter-Web-App' target='_blank'>Source Code</a></li>
                    <li><a href='https://drive.google.com/file/d/1CZVBi9f3cagu_ZxaWSqj_YkZtR-7jtUi/view?usp=drivesdk' target='_blank'>Get App</a></li>
                    <li><a href='https://github.com/Kushal-Gera/' target='_blank'>GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/kushal-gera/' target='_blank'>LinkedIn</a></li>
                </ol>
            </div>
        </div> 
  )
}

export { FloatingColumn }
