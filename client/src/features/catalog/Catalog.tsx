import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";

type Props = {
    products: Product[];
}
const Catalog = (props: Props) => {
    return (
        <div>
            <ProductList products = {props.products}/>
        </div>
    );
};
export default Catalog;

