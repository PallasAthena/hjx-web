import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import hjx_footer from '../static/img/hjxintro/hjx_footer.png';
import '../static/css/main.css';

export default class FooterComponent extends Component{
    render(){
        return(
            <footer>
                <Container fluid className="padding">
                    <Row className="text-center padding">
                        <Col md={4}>
                            <Image src={hjx_footer} alt="footer" fluid />
                        </Col>
                        <Col md={8}>
                            <p>好记星官方网站 版权所有  沪ICP备18027555号-2</p>
                            <p>Copyright@1998-2017 hjx.com All Rights Reserved</p>

                        </Col>
                    </Row>

                </Container>
            </footer>
        );
    }
}