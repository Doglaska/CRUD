import { Dialog } from "@mui/material"
import styles from './productPopup.module.css'

export default function ProductPopup({ productData, onClose, onAddToCart }) {

    return(
        <Dialog open={true} onClose={onClose}>
            <div className={styles.popupContainer}>
                <img src={productData.imgUrl} alt="" />
                <div className={styles.popupContent}>
                    <h2>{productData.name}</h2>
                    <p className={styles.ingredients}>[{String(productData.ingredients)}]</p>
                    <p>{productData.description}</p>
                    <h2>$ {productData.price}</h2>
                    <button onClick={() => { onAddToCart(productData) }}>Add to cart</button>
                </div>
            </div>
        </Dialog>
    )
}