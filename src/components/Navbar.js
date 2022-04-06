import React from 'react'
// import { useState } from 'react'
import PropTypes from 'prop-types'

 function Navbar(props) {
  // const whiteCol = {
  //   color:'white'
  // }

  // const toggleMode = ()=>{

  // }

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" id="home" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
          </li>
        </ul>
        {/* <div className="form-check form-switch">
          <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" style={whiteCol}>DARK MODE</label>
        </div> */}
      </div>
    </div>
  </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: 'set title here',
  about: 'set about here'
}

export default Navbar;
