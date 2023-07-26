import React from 'react'

import {Navbar} from "./Navbar"

const Header = (props) => {
  return (
    <>
        <header className="border-bottom">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid justify-content-center">
                    <a className="navbar-brand text-warning" href="/">
                        <img className="ms-3" src="/logo_color_bg.png" alt="News Hunter" height="40px" style={{backgroundSize:"cover"}}/>
                    </a>
                </div>
            </nav>
        </header>
    
        <Navbar category={props.category}/>
    </>
  )
}

export { Header }
