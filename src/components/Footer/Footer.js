import React from 'react'

const Footer = () => {

  return (
    <footer class='pt-3 pb-5 text-center text-body-secondary bg-body-tertiary'>
      <p>
        Copyright © {new Date().getFullYear()}. All rights reserved.
        <br/>
        Website By Kushal Gera.
      </p>
      <p class='mb-0'>
        <a href='#top'>Back to top</a>
      </p>
    </footer>
  )
}

export { Footer }
