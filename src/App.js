import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { News } from "./components/News"


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route key={'/'} path="/" element={<News />} />
                <Route key={'/search'} exact path="/search/:searchTag" element={<News category='search' />} />
                <Route key={'/technology'} exact path="/technology" element={<News category='technology' />} />
                <Route key={'/business'} exact path="/business" element={<News category='business' />} />
                <Route key={'/sports'} exact path="/sports" element={<News category='sports' />} />
                <Route key={'/health'} exact path="/health" element={<News category='health' />} />
            </Routes>
        </BrowserRouter>
    )
}


export { App }