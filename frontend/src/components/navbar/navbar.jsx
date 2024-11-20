import styles from './navbar.module.css';
import { LuUserCircle, LuMenu } from "react-icons/lu";
import { Drawer } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

    const authData = JSON.parse(localStorage.getItem('auth'));

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleProfileClick = () => {
        if (authData) {
            navigate('/profile');
        } else {
            navigate('/auth');
        }
    };

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarItems}>
                <Link to={'/'}>
                    <img className={styles.logoBranco} src="/images/logoBranco.png" alt="Logo" />
                </Link>
                <div className={styles.navbarLinksContainer}>
                    <Link to={'/'} className={styles.navbarLink}>Home</Link>
                    <Link to={'/products'} className={styles.navbarLink}>Products</Link>
                    <span onClick={handleProfileClick}>
                        <LuUserCircle className={styles.navbarLink} />
                    </span>
                </div>
            </div>
            <Drawer
                anchor="right"
                open={openMenu}
                onClose={handleOpenMenu}
            >
                <div className={styles.drawer}>
                    <Link to={'/'} className={styles.navbarLink} onClick={handleOpenMenu}>Home</Link>
                    <Link to={'/products'} className={styles.navbarLink} onClick={handleOpenMenu}>Products</Link>
                    <span onClick={() => { handleProfileClick(); handleOpenMenu(); }} className={styles.navbarLink}>
                        Profile
                    </span>
                </div>
            </Drawer>
        </nav>
    );
}
