import React, { useState } from 'react';

function Slides({slides}) {

  cosnt [currentSlide , setSlide] = useState(0)

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined"
                  className = {currentSlide == 0 ? "small obtained" : "small"}
                  disabled = {currentSlide === 0}
                  onClick = {()=> setSlide(0)}
                >Restart</button>
                <button data-testid="button-prev" className="small"
                className= {currentSlide === 0 ? "small-obtained" : "small"}
                disabled = { currentSlide === 0}
                onClick = {()=> setSlide(currentSlide - 1)}
                >Prev</button>
                <button data-testid="button-next" className="small"
                className = {currentSlide === slides.length -1 ? "small-obtained" : "small"}
                disabled = { currentSlide === slides.length -1 }
                onClick={() => setSlide(currentSlide + 1)}
                >Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentSlide]}</h1>
                <p data-testid="text">{slides[currentSlide]}</p>
            </div>

        </div>
    );

}

export default Slides;
