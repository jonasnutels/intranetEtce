import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import Noticias from '../Noticias/Noticias';

const CarouselDestaques = () => {
  const images = [
    'http://intranet.tceal.tc.br/v3.2/imagens/banner_rh_intra.png',
    'http://intranet.tceal.tc.br/v3.2/images/banner_ouvidoria.png',
    'http://intranet.tceal.tc.br/v3.2/imagens/banner_dti_intra.png',
  ];

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
