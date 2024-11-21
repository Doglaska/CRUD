import styles from './navbar.module.css';
import { LuUserCircle, LuMenu } from "react-icons/lu";
import { Drawer } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
}

return (
    <nav className= {styles.navbarContainer}>
        <div className= {styles.navbarItems}>
            <Link to={'/'}>
                <img className= {styles.logoBranco} src="/images/logoBranco.png" alt="" />
            </Link>
            <div className= {styles.navbarLinksContainer}>
                <Link to={'/'} className= {styles.navbarLink}>Home</Link>
                <Link to={'/products'} className= {styles.navbarLink}>Products</Link>
                <Link to={'/profile'}>
                    <LuUserCircle className= {styles.navbarLink}/>
                </Link>
            </div>
        </div>
        <div className= {styles.mobileNavbarItems}>
        <Link to={'/'}>
        <img className= {styles.logoBranco} src="/images/logoBranco.png" alt="" />
        </Link>
                <div className= {styles.mobileNavbarBtns}>
                    <LuMenu className= {styles.navbarLink} onClick={handleOpenMenu}/>
                    </div>
            </div>
            <Drawer
            anchor='right'
            open={openMenu}
            onClose={handleOpenMenu}
            >
            <div className= {styles.drawer}>
                <Link to={'/'} className= {styles.navbarLink} onClick={handleOpenMenu}>Home</Link>
                <Link to={'/products'} className= {styles.navbarLink}onClick={handleOpenMenu}>Products</Link>
                <Link to={'/profile'} className= {styles.navbarLink}onClick={handleOpenMenu}>Profile</Link>
                </div>
            </Drawer>
        </nav>
    )
}

 