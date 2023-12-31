import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = (props)=>{

    const location = useLocation()
    const inputRef = useRef(null)
    const navigate = useNavigate()


    useEffect(()=>{
        let newTitle = "" 
        if(!!props?.category)
            newTitle += props.category[0].toUpperCase() + props.category.slice(1);
        else
            newTitle += "Home"
        newTitle += " - News Hunter"
        
        document.title = newTitle
    }, [props.category])

    const scrollToDest = ()=>{
        var my_element = document.getElementById("body");
        my_element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
    }

    const onHandleClick = (event)=>{
        const querytag = inputRef.current.value
        
        if(!querytag)
            navigate('/')
        else{
            navigate('/search/' + querytag)
            scrollToDest()
        }
        
        event.preventDefault()
    }

    return (
        <div className="container">
            <div className="nav-scroller py-1 my-1">
                <nav className="nav nav-underline justify-content-between">
                    <Link onClick={scrollToDest} className={`nav-item nav-link link-body-emphasis ${location.pathname==='/'?'active':''}`} to="/">Home</Link>
                    <Link onClick={scrollToDest} className={`nav-item nav-link link-body-emphasis ${location.pathname==='/technology'?'active':''}`} to="/technology">Technology</Link>
                    <Link onClick={scrollToDest} className={`nav-item nav-link link-body-emphasis ${location.pathname==='/business'?'active':''}`} to="/business">Business</Link>
                    <Link onClick={scrollToDest} className={`nav-item nav-link link-body-emphasis ${location.pathname==='/sports'?'active':''}`} to="/sports">Sports</Link>
                    <Link onClick={scrollToDest} className={`nav-item nav-link link-body-emphasis ${location.pathname==='/health'?'active':''}`} to="/health">Health</Link>
                    
                    <form className="d-flex mx-auto mx-md-0 mb-2 mb-md-0" role="search" onSubmit={onHandleClick} >
                        <input ref={inputRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-warning" type="submit" onClick={onHandleClick} >Search</button>
                    </form>
                </nav>
            </div>
        </div>
    )
}

export {Navbar}
