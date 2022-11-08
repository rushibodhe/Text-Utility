import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* <a className="navbar-brand" href="#">{props.title}</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            {/* <a className="nav-link active" aria-current="page" href='#'>Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to='/about'>{props.about}</Link>
                            {/* <a className="nav-link active" href='#'>{props.about}</a> */}
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleSwitch} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
                    </div>
                </div>
            </div>
        </nav >
    )
}

// Setting the datatype for props:
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

// Setting default props:
Navbar.defaultProps = {
    title: 'Ravi',  // Actually sending title and about values.
    about: 'Coder'
}