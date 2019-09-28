// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./blurredCarrousel.css";
// eslint-disable-next-line no-unused-vars
import { Fade } from "react-slideshow-image";
import carousel1 from "./carousel1.JPG";
import carousel2 from "./carousel2.JPG";
import carousel3 from "./carousel3.JPG";

class BlurredCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeImages: [
        carousel1,
        carousel2,
        carousel3,
      ],

      fadeProperties: {
        duration: 5000,
        transitionDuration: 1000,
        infinite: true,
        indicators: true,
        arrows: false
      }
    };
  }

  render() {

    return (
      <Fade {...this.state.fadeProperties}>

        {this.state.fadeImages.map(
          imagen =>
            <div className="each-fade">
              <div className="image-container">
                <img className="slide" src={imagen} />
              </div>
            </div>
        )}
      </Fade>
    );
  }
}

export default BlurredCarousel;