import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import weichat from '../static/img/social/wechat-96.png';
import weibo from '../static/img/social/weibo-96.png';
import phone from '../static/img/social/Phone_96.png';
import email from '../static/img/social/Email_96px_1181068_easyicon.net.png';


export default class ConnectComponent extends Component{
    render(){
        return(
            <Container fluid >
                <Row className="text-center ">
                    <Col xs={12} className="welcome ">
                        <h2 className="display-4">联系我们</h2>
                    </Col>
                    <Col md={12} className="social padding">
                        <a href="#"><Image src={weichat} fluid /></a>
			            <a href="#"><Image src={phone} fluid /></a>
                        <a href="#"><Image src={weibo} fluid /></a>
                        <a href="#"><Image src={email} fluid /></a>
                    </Col>
                </Row>
            </Container>


        );
    }
}