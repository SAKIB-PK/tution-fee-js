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
            <div className='px-3 py-5 cartPop'>
                <h2 className='text-danger text-center mb-3'>Tutor List-</h2>
                <h4 className="mob-text">Totall Tution : {item.length}</h4>
                <h5 className="mob-text">Totall Price: ৳ {totallPrice.toFixed(2)}</h5>
                <div className="row d-flex border-top mt-3 pt-5">
                    {item.map((res,i)=>(
                                <div key={i} className="d-flex pad-left">
                                    <p>{res.first_name} {res.last_name} -- <span className="text-danger">৳ {res.tution_fee}</span> </p>
                                </div>
                    ))}
                </div>
            </div>
    )
};

export default CartPopup;