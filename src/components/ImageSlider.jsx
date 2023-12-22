import React, { useState, useEffect } from 'react';



const images=[require("../assets/images/slideshow-1.jpg"),
require("../assets/images/slideshow-2.jpg"),
require("../assets/images/slideshow-3.jpg"),
require("../assets/images/slideshow-4.jpg"),
require("../assets/images/slideshow-5.jpg"),
require("../assets/images/slideshow-6.jpg"),
require("../assets/images/slideshow-7.jpg"),
require("../assets/images/slideshow-8.jpg"),
require("../assets/images/slideshow-9.jpg"),
    
]
function ImageSlider({ interval = 4000 }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length, interval]);

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className='image-slideshow'>
      <button className='prev' onClick={handlePrevClick}>❮</button>
      <img src={images[currentImageIndex]} alt="Slider" />
      <button className='next' onClick={handleNextClick}>❯</button>
    </div>
  );
}

export default ImageSlider;
