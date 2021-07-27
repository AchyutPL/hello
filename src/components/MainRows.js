import React from "react";
// import data from "../data";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import RowMainSlider from "./RowMainSlider";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function MainRows({ ourdata }) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef1,slider1] = useKeenSlider({
    slidesPerView: 5,
    // mode: "free",
    spacing: 15,
    initial :0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)},
    breakpoints: {
      "(max-width: 768px)": {
        slidesPerView: 2,
      },
    },
  });
  const [sliderRef2,slider2] = useKeenSlider({
    slidesPerView: 5,
    mode: "free",
    spacing: 15,
    breakpoints: {
      "(max-width: 768px)": {
        slidesPerView: 2,
      },
    },
  });

  return (
    <>
      <h2
        style={{
          fontFamily: '"Titillium Web", sans-serif',
          fontSize: "22px",
          padding: "5px 15px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Featured Products
      </h2>
      <div ref={sliderRef1} className='keen-slider'>
        {ourdata.bags.map((bag) => (   
         
          <div key={bag._id} className='keen-slider__slide'>
            <RowMainSlider product={bag} />
          
          </div>  
            
        ))} 
        {slider1 && (
              <>
                <ArrowForwardIosIcon
                style={{fontSize: '40px' }}
                  className='arrow arrow--right arrow--disabled'  
                     onClick={(e) => e.stopPropagation() || slider1.next()}
                  disabled={currentSlide === 0}
                />
                <ArrowBackIosIcon
                 style={{fontSize: '40px'}}
                        className='arrow arrow--left'
                  onClick={(e) => e.stopPropagation() || slider1.prev()}
                  disabled={currentSlide === slider1.details().size - 1}
                />
              </>
            )} 
      </div>
      
      <a href='/'>
        <img style={{ width: "100%" }} src='/sliders/summer.jpg' alt='' />
      </a>
      <h2
        style={{
          fontFamily: '"Titillium Web", sans-serif',
          fontSize: "22px",
          padding: "5px 15px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        New Arrivals
      </h2>
      <div ref={sliderRef2} className='keen-slider'>
        {ourdata.mobiles.map((mobile) => (
          <div key={mobile._id} className='keen-slider__slide'>
            <RowMainSlider product={mobile} />
          </div>
        ))}
        {slider2 && (
              <>
                <ArrowForwardIosIcon
                style={{fontSize: '40px' ,color: 'red'}}
         className='arrow arrow--right'
                  onClick={(e) => e.stopPropagation() || slider2.next()}
                  disabled={currentSlide === 0}
                />
                <ArrowBackIosIcon
                style={{fontSize: '40px',color: 'red'}}
           className='arrow arrow--left'
                  onClick={(e) => e.stopPropagation() || slider2.prev()}
                  disabled={currentSlide === slider2.details().size - 1}
                />
              </>
            )} 
      </div>
      <a href='/'>
        <img style={{ width: "100%" }} src='/sliders/girl1.jpg' alt='' />
      </a>
    </>
  );
}
