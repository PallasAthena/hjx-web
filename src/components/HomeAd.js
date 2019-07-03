import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button';
/*
import T6_main from '../static/img/products/T6_main.jpg';
import T5_main from '../static/img/products/T5_main.jpg';
import T5plus_main from '../static/img/products/T5plus_main.jpg';
*/
import T5_small from '../static/img/products/WX20190628-164744.png';
import T6_small from '../static/img/products/WX20190628-164803.png';
import '../static/css/main.css';


export default class HomeAd extends Component{

    render(){
        return(
            <Container fluid className="padding-4">
                <Row className="welcome text-center padding">
                    <Col md={12}>
                        <h2 className="display-4">我 们 的 产 品</h2>
                    </Col>
                    <hr/>
                </Row>
                <Row className="justify-content-center">
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={T6_small} alt="T6" />
                            <Card.Body>
                              <Card.Title>T6</Card.Title>
                                <Card.Text>
                                    <p>呼叫老师 学科同步 百万题库</p>
                                </Card.Text>
                              <a href="#"><Button variant="outline-secondary" className="btn-detail">查看详情</Button></a>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src={T6_small} alt="T5" />
                            <Card.Body>
                              <Card.Title>T5</Card.Title>
                                <Card.Text>
                                    <p>呼叫老师 学科同步 百万题库</p>
                                </Card.Text>
                              <a href="#"><Button variant="outline-secondary" className="btn-detail">查看详情</Button></a>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Row>

            </Container>

        );
    }


}