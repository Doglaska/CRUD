import productsServices from "../../services/products";
import { useEffect } from "react";
import Loading from "../loading/page";
import styles from './page.module.css';

export default function Products() {
    const { getAvailableProducts, productsLoading, productsList, refetchProducts } = productsServices();

    useEffect(() => {
        if (refetchProducts) {
            getAvailableProducts();
        }
    }, [refetchProducts]);

    if (productsLoading) {
        return <Loading />;
    }

    console.log(productsList);

    return (
        <div>
            <h1>Products</h1>
            {/* Renderize os produtos aqui */}
        </div>
    );
}
