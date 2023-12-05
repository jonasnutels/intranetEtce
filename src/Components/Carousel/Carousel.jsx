import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import Noticias from '../Noticias/Noticias';
import imagem1 from '../../assets/banner_dti_intra.png';
import imagem2 from '../../assets/banner_rh_intra.png';
import imagem3 from '../../assets/banner_ouvidoria.png';

const CarouselDestaques = () => {
  const images = [imagem1, imagem2, imagem3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className={styles.carousel}>
      <img
        className={styles.imagemCarousel}
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
      />
      <div className={styles.dotContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ''
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <Noticias />
    </div>
  );
};

export default CarouselDestaques;
