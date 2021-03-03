import React from 'react'
import { HashRouter, Route, Link } from "react-router-dom";


const Brand = () => {
  return (
    <HashRouter basename="/">
      <div className = "mimi">
      <Link className = "brand" to="/">Mimi Netto</Link>
      <a className = "smbrand" href="/">Front-end Developer</a>
      <Route exact path="/" component={Home} />
      </div>
    </HashRouter>
  )
}

const Home = () => <span></span>

export default Brand
