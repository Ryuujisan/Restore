import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import {useEffect, useState} from "react";

const Catalog = () => {
    const[products, setPruducts] = useState<Product[]>([]);


    useEffect(() => {
        fetch('https://localhost:5001/api/products')
            .then(res => res.json())
            .then(data => setPruducts(data))
        return () => {};
    }, []);
    
    return (
        <div>
            <ProductList products = {products}/>
        </div>
    );
};
export default Catalog;

