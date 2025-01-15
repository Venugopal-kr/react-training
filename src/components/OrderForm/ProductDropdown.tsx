
import { MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/api';
import { Product } from '../../models/models';

const ProductDropdown = ({ product, onProductChange }: { product: string, onProductChange: (value: string) => void }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };
        fetchData();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onProductChange(event.target.value as string);
    };

    return (
        <>
            <TextField
                id="state"
                label="Product"
                select
                value={product}
                onChange={handleChange}
                fullWidth
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {products.map((product) => (
                    <MenuItem key={product.id} value={product.description}>
                        {product.description}
                    </MenuItem>
                ))}

            </TextField>
        </>
    );
};

export default ProductDropdown;