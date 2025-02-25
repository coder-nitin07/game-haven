import { useEffect, useState } from "react"
import { gallerySlider } from "../../data/products";

const GallerySlider = () => {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  useEffect(()=>{
        const setIntervalTime = setInterval(() => {
            setCurrentIndex(function(prevIndex){
                return ( prevIndex + 1 ) % gallerySlider.length;
            })
        }, 5000);

        return ()=> clearInterval(setIntervalTime);
  }, [ gallerySlider.length ]);

  const showSliderIndex = (index)=>{
        setCurrentIndex(index);
  };
  return (
    <>
        <div className="hero-slider">
            {
                gallerySlider.map((slide, index)=>(
                    <div key={ index }
                        className={` slider-item ${ index === currentIndex ? 'active' : '' } `}
                    >
                        <img src={ slide.bannerImage } alt="" className="slider-image" />
                        <div className="slide-content">
                            <img src={ slide.headingImage } alt="huhiih" />
                            <h1>{ slide.heading }</h1>
                            <p>{ slide.description }</p>
                            <button>{ slide.button }</button>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="slider-dots">
            {
                gallerySlider.map((slide, index)=>{
                    return <span
                        key={ index }
                        className={` dot  ${ index === currentIndex ? 'active' : '' }` }
                        style={{  backgroundColor: 'white',  paddig: '4px' }}
                        onClick={() => showSliderIndex(index) }
                    >
                        <img src={ slide.subImage } style={{ height: "100%", borderRadius: '12px' }} alt="bannerimagesss" />
                    </span>
                })
            }
        </div>
    </>
  )
}

export default GallerySlider