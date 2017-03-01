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
            <Image src="../../assets/e30_01.jpg" />
          </div>
          <div>
            <Image src="../../assets/e30_03.jpg" />
          </div>
          <div>
            <Image src="../../assets/e36.jpg" />
          </div>
          <div>
            <Image src="../../assets/e46.jpg" />
          </div>
          <div>
            <Image src="../../assets/e46_01.jpg" />
          </div>
          <div>
            <Image src="../../assets/e92.jpg" />
          </div>
          <div>
            <Image src="../../assets/f80.jpg" />
          </div>
          <div>
            <Image src="../../assets/f80_02.jpg" />
          </div>
          <div>
            <Image src="../../assets/f80_03.jpg" />
          </div>
          <div>
            <Image src="../../assets/pair.jpg" />
          </div>
          <div>
            <Image src="../../assets/pair_01.jpg" />
          </div>
        </Slider>
      </div>
    )
  }
}