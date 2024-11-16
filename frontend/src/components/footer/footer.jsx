import styles from './footer.module.css'
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className={styles.footerContainer}>
    
        {/* Conteúdo do rodapé */}
        <div className={styles.footerContent}>
          {/* Seção de Horário de Funcionamento */}
          <section className={styles.scheduleSection}>
            <h2>Horário de Funcionamento</h2>
            <ul className={styles.scheduleList}>
              <li><strong>Segunda a Sexta:</strong> 08:00 - 20:00</li>
              <li><strong>Sábado:</strong> 09:00 - 18:00</li>
              <li><strong>Domingo:</strong> Fechado</li>
            </ul>
          </section>
  
          {/* Seção de Contato */}
          <section className={styles.contactSection}>
            <h2>Contate-nos</h2>
            <ul className={styles.contactList}>
              <li><strong>Instagram:</strong> <FaInstagram /> </li>
              <li><strong>Facebook:</strong> <FaFacebookSquare /> </li>
              <li><strong>Whatsapp:</strong> <FaWhatsapp /> </li>
              <li><strong>Localização:</strong> <FaMapMarkerAlt /> </li>
            </ul>
          </section>
        </div>
      </footer>
    );
  }