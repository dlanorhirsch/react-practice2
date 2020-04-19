/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export class CarouselDemo extends React.Component{
  render(){
    return(
      <Carousel autoPlay infiniteLoop showArrows={true}>
        <div>
          <img src="https://source.unsplash.com/random/500x249/?architecture" alt="random image"/>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/500x250/?architecture" alt="random image"/>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/500x251/?architecture" alt="random image"/>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/500x252/?architecture" alt="random image"/>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/500x248/?architecture" alt="random image"/>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/500x253/?architecture" alt="random image"/>
        </div>
      </Carousel>
    )
  }
}