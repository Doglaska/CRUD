// Importações necessárias
import { useState } from 'react';
import styles from './page.module.css';

// Dados dos profissionais
const profissionais = [
  { img: '/images/carlos.avif', name: 'Carlos Silva', role: 'Especialista em Cortes Clássicos' },
  { img: '/images/nelson.avif', name: 'Nelson Souza', role: 'Especialista em Barba e Bigode' },
  { img: '/images/lucas.avif', name: 'Lucas Santos', role: 'Expert em Tratamentos Capilares' },
];

export default function Profissionais() {
  return (
    <div className={styles.pageContainer}>
      <h1>Nossos Profissionais</h1>
      <p>Conheça nossa equipe de especialistas</p>

      {/* Seção de Profissionais */}
      <div className={styles.profissionaisGrid}>
        {profissionais.map((profissional, index) => (
          <div key={index} className={styles.profissionalCard}>
            <img src={profissional.img} alt={profissional.name} className={styles.profissionalImage} />
            <div className={styles.profissionalText}>
              <h2>{profissional.name}</h2>
              <p>{profissional.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
