import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export class CarouselDemo extends React.Component{
  render(){
    return(
      <Carousel autoPlay infiniteLoop showArrows={true}>
        <div>
          <img src="https://source.unsplash.com/random/800x449/?architecture" alt=""/>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/800x450/?architecture" alt=""/>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/800x451/?architecture" alt=""/>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/800x452/?architecture" alt=""/>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/800x448/?architecture" alt=""/>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/800x453/?architecture" alt=""/>
        </div>
      </Carousel>
    )
  }
}