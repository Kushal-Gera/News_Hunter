/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const BigPost = props => {
    const getFormattedDate = date_string => {
        const dateObj = new Date(date_string)
        let extention = 'th'
        if(dateObj.getDate().toString() === '1') extention = 'st'
        if(dateObj.getDate().toString() === '2') extention = 'nd'
        
        return (
            dateObj.getDate().toString() +
            extention + 
            ' ' +
            dateObj.toLocaleString('default', { month: 'long' }).toUpperCase()
        )
    }

    return (
        <div className='col-md-6' style={{ height: '380px'}}>
            <div className='row g-0 border rounded-4 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                <div className='col p-4 d-flex flex-column position-static'>
                    <div
                        className='btn btn-sm btn-outline-warning rounded-5 d-inline-block mb-2'
                        style={{ maxWidth: '120px', pointerEvents: 'none' }}
                    >
                        <strong className=' text-warning'>Entertainment</strong>
                    </div>
                    <h3 className='mb-0'style={{ lineHeight: '2rem', maxHeight: '6rem', overflow: 'hidden' }}>
                        {props?.data?.title?.split(/\s+/).slice(0, 8).join(' ') + '...'}
                    </h3>
                    
                    <div className='mb-1 text-dark fw-bold'>{getFormattedDate(props?.data?.publishedAt.split('T')[0])}</div>
                    
                    <p className='mb-auto'>{props.data?.description?.split('.')[0] + '.' || null}</p>
                    
                    <a href={props?.data?.url} target='_blank' className='icon-link gap-1 icon-link-hover' >Continue reading </a>
                </div>

                <div style={{ minHeight: '320px' }} className='col-auto d-none d-lg-block' >
                    <img src={props?.data?.urlToImage} style={{ objectFit: 'cover' }} width='200' height='100%' aria-label='Thumbnail' />
                </div>

            </div>
        </div>
    )
}

export { BigPost }
