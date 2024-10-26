import styles from './navbar.module.css'
import {LuUserCircle, LuMenu} from "react-icons/lu"
import {Drawer} from '@mui/material'
import { useState } from 'react'

export default function Navbar(){
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className= {styles.navbarContainer}>
            <div className= {styles.navbarItems}>
                <img className= {styles.logoBranco} src="/logoBranco.png" alt="" />
                <div className= {styles.navbarLinksContainer}>
                    <a href="" className= {styles.navbarLink}>Home</a>
                    <a href="" className= {styles.navbarLink}>Products</a>
                    <LuUserCircle className= {styles.navbarLink}/>
                </div>
            </div>
            <div className= {styles.mobileNavbarItems}>
                <img className= {styles.logoBranco} src="/logoBranco.png" alt="" />
                <div className= {styles.mobileNavbarBtns}>
                    <LuUserCircle className= {styles.navbarLink}/>
                    <LuMenu className= {styles.navbarLink} onClick={handleOpenMenu}/>
                </div>
            </div>
            <Drawer
            anchor='right'
            open={openMenu}
            onClose={handleOpenMenu}
            >
                <div className= {styles.drawer}>
                    <a href="" className= {styles.navbarLink}>Home</a>
                    <a href="" className= {styles.navbarLink}>Products</a>
                    <a href="" className= {styles.navbarLink}>Profile</a>
                </div>
            </Drawer>
        </nav>
    )
}