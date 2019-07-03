import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Intro from '../static/img/hjxintro/xin_2.jpg';
import honer from '../static/img/news/0116.png';




export default class HjxIntro extends Component{

    render(){
        return(
            <Container fluid className="padding">
                <Row className="padding">
                    <Col lg={6}>
                        <h2>品牌新闻</h2>
                        <Row className="news">
                            <Col xs={3}> <Image src={honer} fluid /></Col>
                            <Col xs={9}><h5>好记星在线教育获得“2016在线教育百强”称号</h5>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="news">
                            <Col xs={3}> <Image src={honer} fluid /></Col>
                            <Col xs={9}><h5>好记星在线教育获得“2016在线教育百强”称号</h5>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="news">
                            <Col xs={3}> <Image src={honer} fluid /></Col>
                            <Col xs={9}><h5>好记星在线教育获得“2016在线教育百强”称号</h5>
                            </Col>
                        </Row>
                        <hr/>
                    </Col>
                    <Col lg={6} className="padding-top-2">
                        <h2>关于好记星</h2>
                        <br/>
                        <Image src={Intro} fluid />
                    </Col>
                </Row>
            </Container>
        );
    }


}