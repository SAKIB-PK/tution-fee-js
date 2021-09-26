import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';

const Cards = () => {
    const [items,setItems] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    function hundleAddToCart(product){
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <Container>
            <Row>
                <Col xs={7} md={8}>
                    <Row>
                        {
                            items.map(item =><Item key={item.id} item ={item} hundle={hundleAddToCart}/>)
                        }
                    </Row>
                </Col>
                <Col xs={5} md={4}>
                    <Cart item={cart}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Cards;