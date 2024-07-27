import React, { useState, useEffect } from 'react';
import './Image.css'; // Import CSS for styling

const Image = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true); // Trigger fade effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false); // Turn off fade effect after transition
      }, 1000); // Wait for fade transition to complete (adjust as needed)
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, [images]);

  return (
    <main>
      <div className='Container'>
        <div className="image-slider">
          <img
            id='Im'
            className={fade ? 'fade-out' : 'fade-in'}
            src={images[currentImageIndex]}
            alt={images[currentImageIndex].description || `Image ${currentImageIndex}`}
          />
        </div>
      </div>
    </main>
  );
};

export default Image;