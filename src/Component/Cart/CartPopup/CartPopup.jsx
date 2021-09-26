import React from 'react';
import './CartPopup.css';

const CartPopup = (props) => {
    const item= props.item
    let totallPrice=0;
    for(const teach of item){
        let newPrice = parseFloat(teach.tution_fee)
         totallPrice += newPrice
    }
    return (
            <div className=" ">
                <div className="row d-flex">
                    <div className="d-flex pad-left">
                    
                    </div>
                </div>
                <h4 className="mob-text">Totall Tution : {item.length}</h4>
                <h5 className="mob-text">Totall Price: ৳ {totallPrice.toFixed(2)}</h5>
            </div>
    )
};

export default CartPopup;