import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { useState } from 'react';

const Product = (props) => {
    const { stock, seller } = props.values;
    console.log("AMAR VALUZZ:", props)
    
    const [count, setCount] = useState(0);

    return (
        <div class="product-component">
            <div class="image">
                <img src={props.values.img} alt="NOT OK!" />
            </div>
            <div>
                <h1>Name:{props.values.name} </h1>
                <h4>by: {seller} </h4>
                <h2>$    {props.values.price}</h2>
                <h3>Category:{props.values.category} </h3>
                <h5>only {stock} left in stock - order soon </h5>

                <button className="button" onClick={() => props.buttonValue(props.values)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                
                <h1>My count: {count}</h1>
                <button onClick={() => setCount(count+1)} >Test Button</button>
            </div>
        </div>
    );
};

export default Product;