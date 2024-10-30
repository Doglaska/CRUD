import styles from './page.module.css'
import Corte from '../../../public/images/homepage/corte'
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Home(){
    return(
        <div className={styles.pageContainer}>
            <section>
                <h1>Bem vindo ao Bizumic Barber!</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id cum quam. Quod impedit at quo! Blanditiis fugit, 
                    sit ea voluptas magnam non autem quas pariatur quod maiores consequatur odio.
                </p>
            </section>
            <section className={styles.cutSection}>
                <div>
                    <i><Corte/></i>
                    <h4>Corte de cabelo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil cumque vel. 
                        Necessitatibus harum quaerat corporis dolore explicabo nisi fuga unde magnam ad molestias aspernatur distinctio perspiciatis,
                        veniam voluptatem? Dolor.
                    </p>
                </div>
                <div>
                    <i><Corte/></i>
                    <h4>Corte de cabelo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil cumque vel. 
                        Necessitatibus harum quaerat corporis dolore explicabo nisi fuga unde magnam ad molestias aspernatur distinctio perspiciatis,
                        veniam voluptatem? Dolor.
                    </p>
                </div>
                <div>
                    <i><Corte/></i>
                    <h4>Corte de cabelo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil cumque vel. 
                        Necessitatibus harum quaerat corporis dolore explicabo nisi fuga unde magnam ad molestias aspernatur distinctio perspiciatis,
                        veniam voluptatem? Dolor.
                    </p>
                </div>
            </section>
            <section className={styles.contactSection}>
                <h1>Lorem!</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab ducimus quis accusamus? 
                    Quod esse ad sapiente molestias at a illum dolores expedita, autem ipsam, 
                    facilis voluptatum, repudiandae eligendi doloremque.
                </p>
                <div className={styles.socialButtonsContainer}>
                    <button className={styles.socialButton}><FaInstagram /> Instagram</button>
                    <button className={styles.socialButton}><FaFacebookSquare /> Facebook</button>
                    <button className={styles.socialButton}><FaWhatsapp /> Whatsapp</button>
                    <button className={styles.socialButton}><FaMapMarkerAlt />Location</button>
                </div>
            </section>
        </div>
    )
}