import React from 'react';
import './Cart.css';
import CartPopup from './CartPopup/CartPopup';

const Cart = (props) => {
    return (
        <div className='cart border'>
            <CartPopup item={props.item}/>
        </div>
    );
};

export default Cart;