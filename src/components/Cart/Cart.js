import React from 'react';

const Cart = (props) => {
    const cart = props.cart;  //Destructring
    
    const total = cart.reduce((total, x) => total + x.price, 0);       //xoz ekta function total price ager price er sathe jog korar jonno.
    const total2 = cart.reduce((total2, y) => total2 + y.shipping, 0);  //shob reduce kore sudhu Shipping k niye jog korar function.

    let shipping = 0.00;
    if( total2 >= 35){
        shipping = 0.00;
    }
    else if( total2 >= 15){
        shipping = 4.99;
    }
    else if( total2> 0){
        shipping = 12.99;
    }

    const tax = Math.round(total/10).toFixed(2);  //hudai tax newar jonno extra variable nichi.
    const grandTotal = Math.round(total + shipping + Number(tax)).toFixed(2);  //shob jog korchi last a ektu fresh kore plus Math.round plus toFixed er moto kichu habijabi jinish korchi shundor moto.
    
    const formatNumber = x => {         //ei function hocche dushto number gula string a convert hoye jay (toFixed use korle), tader shoja korte ekta function likhte baddho hoiya eitar ekta. 
        const precition = x.toFixed(2);
        
        return Number(precition)
    }


    return (
        <div>
            <h4>Order Summery: {cart.length} </h4>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small> Initial Shipping Cost: {formatNumber(total2)} </small></p>
            <p>Total Shipping: $ {shipping}</p>
    
            <h4>Tax: {tax} </h4>
            <h2>Total Price: {Number(grandTotal)} </h2>

        </div>
    );
};

export default Cart;