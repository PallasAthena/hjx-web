import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ozing from '../static/img/ozing.png';

 class NavigationBar1 extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={ozing}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">首页</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">产品</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">服务</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">商城</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            );
    }
};


export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar expand="md" bg="light" variant="light" sticky="top">
                <Navbar.Brand href="#"><img src={ozing} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse id="navbarResponsive">
                    <Nav>
                      <Nav.Link href="/home" active>首页</Nav.Link>
                      <Nav.Link href="#link">产品</Nav.Link>
                       <Nav.Link href="#link">服务</Nav.Link>
                       <Nav.Link href="#link">商城</Nav.Link>
                    </Nav>
              </Navbar.Collapse>
            </Navbar>

            );
    }
};