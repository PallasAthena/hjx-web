import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import carousel_1 from '../static/img/carousels/carousel_1.png';
import carousel_2 from '../static/img/carousels/carousel_2.png';
import carousel_4 from '../static/img/carousels/carousel_4.png';
import carousel_5 from '../static/img/carousels/carousel_5.png';


class CarouselComponent1 extends Component{
    render(){
        return(
            <div id="slides" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                    <li data-target="#slides" data-slide-to="3"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={carousel_1}/>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel_2}/>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel_4}/>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel_5}/>
                    </div>
                </div>
            </div>

        );
    }
};

export default class CarouselComponent extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <Image src={carousel_1} fluid  alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={carousel_2} fluid  alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={carousel_4} fluid  alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={carousel_5} fluid  alt="First slide"/>
                </Carousel.Item>
            </Carousel>


        );
    }
}


