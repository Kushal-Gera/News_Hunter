/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const MiniPost = (props) => {

    function splitLastOccurrence(str, substring) {
      const lastIndex = str.lastIndexOf(substring);
      const before = str.slice(0, lastIndex);
      const after = str.slice(lastIndex + 1);
      return [before, after];
    }

    const getFormattedDate = date_string => {
        const dateObj = new Date(date_string)
        return (
            dateObj.getDate().toString() + 
            ' ' +
            dateObj.toLocaleString('default', { month: 'long' }) +
            ', ' +
            dateObj.getFullYear().toString() 
        )
    }

    return (    
          <li>
              <a href={props?.data?.url} target='_blank' class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                <div class="col-lg-4">
                    <img style={{width:"100%", height:"100px", objectFit:"cover"}} src={props?.data?.urlToImage} />
                </div>

                <div class="col-lg-8">
                    <h6 class="mb-0">{splitLastOccurrence(props?.data?.title || '', "-")[0]}</h6>
                    <small class="text-body-secondary">
                        {getFormattedDate(props?.data?.publishedAt.split('T')[0])}
                    </small>
                </div>
              </a>
          </li>
    )
}

export { MiniPost }
