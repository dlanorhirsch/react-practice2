
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselProvider } from 'react-responsive-carousel';
import { Slider } from 'react-responsive-carousel';
import { Slide } from 'react-responsive-carousel';

export class CarouselDemo extends React.Component{
  render(){
    return(
      <CarouselProvider 
        naturalSlideWidth={100}
        naturalSlideHeight = {125}
        totalSlides={5}
      >
      <Slider>
        <Slide index={0}>
          <img src="https://source.unsplash.com/random/?architecture" alt=""/>
        </Slide>
        <Slide index={1}>
          <img src="https://source.unsplash.com/random/?architecture" alt=""/></Slide>
        <Slide index={2}>
          <img src="https://source.unsplash.com/random/?architecture" alt=""/></Slide>
          <Slide index={3}>
          <img src="https://source.unsplash.com/random/?architecture" alt=""/></Slide>
          <Slide index={4}>
          <img src="https://source.unsplash.com/random/?architecture" alt=""/></Slide>
        </Slider>
      </CarouselProvider>
    )
  }
}