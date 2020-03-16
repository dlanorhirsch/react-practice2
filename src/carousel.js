import React from 'react';


export class Carousel extends React.Component{
  render(){
    return(
      <div id="carouselControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="https://source.unsplash.com/random/600x249/?architecture" alt=""/>       
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="https://source.unsplash.com/random/600x250/?architecture" alt=""/>       
            </div> 
            <div className="carousel-item">
              <img className="d-block img-fluid" src="https://source.unsplash.com/random/600x251/?architecture" alt=""/>       
            </div>  
          </div>
          <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
      </div>
    )
  }
}