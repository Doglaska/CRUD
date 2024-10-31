import styles from './footer.module.css'
import {Link} from 'react-router-dom'

export default function Footer(){
    return(
        <footer className={styles.footerContainer}>
            <img src="/images/logoBranco.png" alt="" />
            <div>
                <h3>Menu</h3>
                <div className={styles.linksContainer}>
                    <Link className={styles.link} to={'/'}>HomePage</Link>
                    <Link className={styles.link} to={'/products'}>Products</Link>
                    <Link className={styles.link} to={'/profile'}>Profile</Link>
                </div>
            </div>
            <hr className={styles.line}/>
            <div>
                <p>
                    &copy; 2024.
                    <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm" target='_blank'> LGPD</a>
                </p>
            </div>
        </footer>
    )
}
