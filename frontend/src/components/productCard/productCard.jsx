import styles from './productCard.module.css'

export default function ProductCard({productData}) {
    return(
        <>
            <div className={styles.cardContainer}>
                <img src={productData.imgUrl} alt="" />
                <div className={styles.cardContainer}>
                    <h4>{productData.name}</h4>
                    <p>{productData.description}</p>
                    <h4>${productData.price}</h4>
                </div>
            </div>
        </>
    )
}