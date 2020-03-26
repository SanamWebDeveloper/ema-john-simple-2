import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import '../Cart/Cart.css';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleProduct = (values) => {
        console.log("Product added", values)
        const newCart = [...cart, values];
        setCart(newCart);
    }

    return (
        <div class="shop-container">
            <div className="product-container">
                {products.map(x => <Product values={x} buttonValue={handleProduct} > </Product>)}
            </div>

            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;