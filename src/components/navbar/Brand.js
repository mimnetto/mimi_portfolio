import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { HashRouter, Route } from "react-router-dom";


const Brand = () => {
  return (
    <HashRouter basename="/">
      <div className = "mimi">
      <AnchorLink href='#top' offset='150' className = "brand" to="/">Mimi Netto</AnchorLink>
      <a className = "smbrand" href="/">Front-end Developer</a>
      <Route exact path="/" component={Home} />
      </div>
    </HashRouter>
  )
}

const Home = () => <span></span>

export default Brand
