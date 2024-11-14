import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './page.module.css';

const services = [
  { img: '/src/images/corte.webp', title: 'Corte de Cabelo', text: 'Experimente nosso corte personalizado.' },
  { img: '/src/images/barba.webp', title: 'Barba', text: 'O tratamento que sua barba merece, feito com navalha e produtos que hidratam os pelos do rosto.' },
  { img: '/src/images/maquina.webp', title: 'Maquina', text: 'Cortes apenas com a máquina de cabelo, neste serviço o uso de pentes varia conforme o serviço realizado.' },
  { img: '/src/images/escova.webp', title: 'Escova progressiva', text: 'A escova progressiva é um procedimento químico que alisa os cabelos gradativamente.' },
  { img: '/src/images/depilacao.webp', title: 'Depilação com Cera', text: 'A depilação com cera tem vantagem de ser rápida e eficaz, tem como objetivo tirar os pelos os pelos do corpo na raiz.' },
  { img: '/src/images/acabamento.webp', title: 'Acabamentos', text: 'O serviço de acabamento do cabelo é mais importante para seu visual final do que você imagina..' }
];

const images = [
  {
    src: '/src/images/cadeira.webp',
    text: 'Bem-vindo ao Bizumic Barber! Transforme seu estilo aqui.',
  },
  {
    src: '/src/images/equipe.jfif',
    text: 'Conheça os nossos profissionais.',
  },
  {
    src: '/src/images/cabelo.jpg',
    text: 'Uma das maiores referências do mercado, oferecemos mais do que cortes de cabelo, oferecemos experiência.',
  },
];
const handleProfissionaisClick = () => {
  navigate('/profissionais');
  window.scrollTo(0, 0); // Garante que a página carregue no topo
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleAgendeClick = () => {
    navigate('/agendamento');
    window.scrollTo(0, 0); // Garante que a página carregue no topo
  };

  const handleProfissionaisClick = () => {
    navigate('/profissional');
    window.scrollTo(0, 0); // Garante que a página carregue no topo
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.parallaxBanner}></div>

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
                <button className={styles.agendeButton} onClick={handleAgendeClick}>
                  Agende Aqui
                </button>
              )}
              {currentIndex === 1 && (
                <button className={styles.agendeButton} onClick={handleProfissionaisClick}>
                  Conheça Aqui
                </button>
              )}
            </div>
          </div>
        </div>

        <button className={styles.carouselButton} onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <h1>Serviços</h1>
      <p>Confira nossos serviços</p>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img src={service.img} alt={service.title} className={styles.serviceImage} />
            <div className={styles.serviceText}>
              <h1>{service.title}</h1>
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
