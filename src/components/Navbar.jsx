import React from 'react';
import whitepaper from '../whitepaper.pdf'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
      <div className='container'>
        <a className="navbar-brand" href="/"><img src={require('../Img/logo.png')} style={{ "width": "80px" }} alt="" /></a>
        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mr-2">
                <a className="nav-link" href={whitepaper} target = "_blank">Docs</a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="https://t.me/marginetwork">Community</a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/swap">Swap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn hero-btn" href="/trade" style={{ color: "#fff", padding: "0.4em 0.5em" }}>Launch App</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar