import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Item.css';

const Item = (props) => {
    const {first_name,last_name,image,tution_fee,gender,email,age} =props.item
    
    return (
        <Col xs={6} md={4}>
            <Card className='mt-5 cart-item '>
                <Card.Img className='circle'  variant="top" src={image}  />
                <Card.Body>
                    <Card.Text>
                        Name: <strong> {first_name} {last_name}</strong> <br />
                        Tution Fee: <strong> ৳ {tution_fee}</strong> <br />
                        Gender: <strong>{gender}</strong> <br />
                        Age: <small><strong>{age}</strong></small> <br />
                        Email: <small><strong>{email}</strong></small>
                    </Card.Text>
                    <Button variant='warning' className='mx-auto d-block'  onClick={()=> props.hundle(props.item)}><FontAwesomeIcon icon={faGraduationCap}> </FontAwesomeIcon> Tution Start</Button>
                    <ul className="list-inline justify-content-center d-flex mt-3 ">
                        <li className="list-inline-item font-awesome"> <a href="#link"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a> </li>
                        <li className="list-inline-item font-awesome"><a href="#link"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a> </li>
                        <li className="list-inline-item font-awesome"><a href="#link"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a> </li>
                    </ul>
                    
                </Card.Body>                                        
            </Card>
        
        </Col>
    );
};

export default Item;