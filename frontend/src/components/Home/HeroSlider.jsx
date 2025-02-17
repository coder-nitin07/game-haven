import { useEffect, useState } from "react"
import {  IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

const HeroSlider = () => {
  const images = [
        "/src/assets/banner1.jpg",
        "/src/assets/banner2.jpg",
        "/src/assets/banner3.jpg",
  ];
  const [ currentIndex, setCurrentIndex ] = useState(0);

  useEffect(()=>{
    const clearID = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return ()=> clearInterval(clearID);
  }, [ images.length ]);

  const goToPrev = ()=>{
    setCurrentIndex((prevIndex)=> (prevIndex -1 + images.length) % images.length );
  };

  const goToNext = ()=>{
    setCurrentIndex((prevIndex) => (prevIndex +1) % images.length );
  };

  return (
    <div className='image-slider'>
        <div className="slider-container">
            <img src={ images[currentIndex] } alt="slider-images" className=" w-full h-100 bg-cover" />
        </div>
        <div className="slider-button ">
            <button onClick={ goToPrev } >
                <IoChevronBackOutline className="hover:text-black " />
            </button>
            <button onClick={ goToNext } >
                <IoChevronForward className="hover:text-black" />
            </button>
        </div>
    </div>
  )
}

export default HeroSlider