import productServices from "../../services/products"
import { useEffect, useState } from "react"
import Loading from "../loading/page"
import ProductCard from "../../components/productCard/productCard"
import styles from './page.module.css'

export default function Products(){
    
    const {getAvailableProducts, productLoading, productsList,  refetchProducts} = productServices()

    useEffect(() => {
        if(refetchProducts) {
            getAvailableProducts()
        }
    }, [refetchProducts])

    if (productLoading){
        return(<Loading/>)
    }

    console.log(productsList)

    return(

            <h1>Products</h1>

    )
}