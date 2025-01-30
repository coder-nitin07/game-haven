import { useEffect, useState } from "react"
import {  IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

const HeroSlider = () => {
  const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26HpPzA74ujrmAeSLZ-pbuLm8SUJeY_Wv9w&s",
        "https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg",
        "https://i.etsystatic.com/14746444/r/il/058027/1765470426/il_1080xN.1765470426_fj7p.jpg",
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