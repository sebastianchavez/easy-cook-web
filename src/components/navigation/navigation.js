import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navigation extends Component {
    render() {
        return (
            <div classNameName="site-navbar-wrap js-site-navbar bg-white">
      
            <div className="container">
              <div className="site-navbar bg-light">
                <div className="row align-items-center">
                  <div className="col-2">
                    <h2 className="mb-0 site-logo"><Link to="/" className="font-weight-bold text-uppercase">Easy Cook</Link></h2>
                  </div>
                  <div className="col-10">
                    <nav className="site-navigation text-right" role="navigation">
                      <div className="container">
                        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>
      
                        <ul className="site-menu js-clone-nav d-none d-lg-block">
                          <li><Link to="/">Inicio</Link></li>
                          <li><Link to="/search">Buscar</Link></li>
                          <li><Link to="/login"><span className="d-inline-block bg-primary text-white btn btn-primary">Iniciar sesion</span></Link></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
