import React from "react";
// import data from "../../data";
import RowMainSlider from "../RowMainSlider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
export default function Laptops({ data }) {
  const [currentSlide] = React.useState(0)
  const [sliderRef,slider] = useKeenSlider({
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
    <div ref={sliderRef} className='keen-slider'>
      {data.map((laptop) => (
        <div key={laptop._id} className='keen-slider__slide number-slide'>
          <RowMainSlider product={laptop} />
        </div>
      ))}
      {slider && (
              <>
                <ArrowForwardIosIcon
                style={{fontSize: '40px' ,color: 'red'}}
         className='arrow arrow--right'
                  onClick={(e) => e.stopPropagation() || slider.next()}
                  disabled={currentSlide === 0}
                />
                <ArrowBackIosIcon
                style={{fontSize: '40px',color: 'red'}}
           className='arrow arrow--left'
                  onClick={(e) => e.stopPropagation() || slider.prev()}
                  disabled={currentSlide === slider.details().size - 1}
                />
              </>
            )} 
    </div>
  );
}
