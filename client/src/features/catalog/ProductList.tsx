import type { Product } from '../../app/models/product';
import {Box} from "@mui/material";
import ProductCard from './ProductCard';
type Props = {
    products: Product[];
}
const ProductList = ({products} : Props) => {
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3}}>
            {products.map((item) => (
                <ProductCard key={item.id} product={item}/>
            ))}
        </Box>
    );
};

export default ProductList;