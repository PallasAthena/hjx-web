import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import art from '../static/img/navblock/art.png';
import dictation from '../static/img/navblock/dictation.png';
import drawing from '../static/img/navblock/drawing2.png';
import listen from '../static/img/navblock/listen.png';
import word from '../static/img/navblock/word.png';
import written from '../static/img/navblock/written.png';


export default class NavBlock extends Component{
    render(){
        return(
            <Container fluid className="padding-top-2" id="bavblocks">
                <Row className="text-center ">
                    <Col  xs={4} >
                        <a href="#"><Image  className="icon-padding" src={art} roundedCircle /></a>
                    </Col>
                    <Col  xs={4} >
                        <a href="#"><Image  className="icon-padding" src={dictation} roundedCircle/></a>
                    </Col>
                    <Col xs={4} >
                        <a href="#"><Image  className="icon-padding" src={drawing} roundedCircle/></a>
                    </Col>
                </Row>

                <Row className="text-center ">
                    <Col xs={4} >
                        <a href="#"><Image className="icon-padding" src={listen} roundedCircle/></a>
                    </Col>
                    <Col xs={4} >
                        <a href="#"><Image className="icon-padding" src={word} roundedCircle/></a>
                    </Col>
                    <Col xs={4} >
                        <a href="#"><Image className="icon-padding" src={written} roundedCircle/></a>
                    </Col>
                </Row>

            </Container>


        );
    }
}