import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 
export class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider className="carousel-size"
        naturalSlideWidth={500}
        naturalSlideHeight={250}
        totalSlides={3}
      >
        <Slider className="slider">
          <Slide index={0}>
            <img src="https://source.unsplash.com/random/500x249/?architecture" alt=""/>
          </Slide>
          <Slide index={1}>
            <img src="https://source.unsplash.com/random/500x250/?architecture" alt=""/>
          </Slide>
          <Slide index={2}>
            <img src="https://source.unsplash.com/random/500x251/?architecture" alt=""/>
          </Slide>
        </Slider>
        <ButtonBack className='btn-back'>Back</ButtonBack>
        <ButtonNext className='btn-forward'>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}