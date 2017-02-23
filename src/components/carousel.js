import React, { Component } from 'react';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div className="carousel-container" >
        <Slider {...settings}>
          <div>
            <Image src="../../assets/e30.jpg" />
          </div>
          <div>
            <Image src="../../assets/e30.jpg" />
          </div>
          <div>
            <Image src="../../assets/e30.jpg" />
          </div>
          <div>
            <Image src="../../assets/e30.jpg" />
          </div>
          <div>
            <Image src="../../assets/e30.jpg" />
          </div>
          <div>
            <Image src="../../assets/e30.jpg" />
          </div>
        </Slider>
      </div>
    )
  }
}