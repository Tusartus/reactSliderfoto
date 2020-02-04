import React from 'react';

import { Slide } from 'react-slideshow-image';

import avo from './img/avo.jpg';
import ml from './img/ml.jpg';
import ph from './img/ph.jpg';

import './Slide.css';


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows:true

}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>

                <div className="each-slide">
                    <div>
                        <img src={avo} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={ml} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={ph} alt="img3" />
                    </div>
                </div>

            </Slide>
        </div>
    )
}

export default Slideshow;