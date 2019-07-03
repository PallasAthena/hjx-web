import React, {Component} from 'react';
import NavigationBar from '../components/NavigationBar';
import CarouselComponent from '../components/Carousel';
import HomeAd from '../components/HomeAd';
import HjxIntro from '../components/HjxIntro';
import ConnectComponent from '../components/Connect';
import FooterComponent from '../components/Footer';
import NavBlock from '../components/NavBlock';



export default class  Home extends Component{
    render(){
        return(
            <React.Fragment>
                <NavigationBar/>
                <CarouselComponent />
                <NavBlock />
                <HomeAd />

                <HjxIntro />
                <ConnectComponent/>
                <FooterComponent/>
            </React.Fragment>
        );
    }
}


