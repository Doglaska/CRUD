import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './page.module.css';

const services = [
  { img: '/src/images/servico1.jpg', text: 'Corte de Cabelo' },
  { img: '/src/images/servico2.jpg', text: 'Barba' },
  { img: '/src/images/servico3.jpg', text: 'Alisamento' },
  { img: '/src/images/servico4.jpg', text: 'Coloração' },
  { img: '/src/images/servico5.jpg', text: 'Tratamento' },
  { img: '/src/images/servico6.jpg', text: 'Hidratação' }
];

const images = [
  {
    src: '/src/images/cadeira.webp', // Caminho para a imagem
    text: 'Bem-vindo ao Bizumic Barber! Transforme seu estilo aqui.',
  },
  {
    src: '/src/images/cabelo.jpg', // Caminho para a imagem
    text: 'Uma das maiores referências do mercado, oferecemos mais do que cortes de cabelo, oferecemos experiência.',
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.pageContainer}>
      {/* Container Parallax para o Banner */}
      <div className={styles.parallaxBanner}>
        {/* Conteúdo opcional do banner */}
      </div>

      {/* Carrossel */}
      <div className={styles.carouselContainer}>
        <button className={styles.carouselButton} onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className={styles.carouselSlide}>
          <div className={styles.imageTextContainer}>
            <img
              src={images[currentIndex].src}
              alt="Carrossel"
              className={styles.carouselImage}
            />
            <div className={styles.carouselText}>
              <h2>{images[currentIndex].text}</h2>
              {currentIndex === 0 && (
                <button className={styles.agendeButton}>Agende Aqui</button>
              )}
            </div>
          </div>
        </div>

        <button className={styles.carouselButton} onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <h1>Serviços</h1>
      <p>Esses são nossos serviços oferecidos</p>
      {/* Seção de Serviços */}
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img src={service.img} alt={service.text} className={styles.serviceImage} />
            <p className={styles.serviceText}>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
