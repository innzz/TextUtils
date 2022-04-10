import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar(props) {

  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:`${props.mode==='light'?'black':'white'}`}}>{props.title}</a>
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" id="home" aria-current="page" href="#" style={{color:`${props.mode==='light'?'black':'white'}`}} >Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" to="#" style={{color:`${props.mode==='light'?'black':'white'}`}} >{props.about}</a>
          </li> */}
        </ul>
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" style={{color:`${props.mode==='light'?'black':'white'}`}}>{ props.modeText }</label>
        </div>
      {/* </div> */}
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
