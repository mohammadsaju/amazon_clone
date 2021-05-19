import React from 'react';
import './Checkout.css';
import { UseStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{basket}] = UseStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img className='checkout__ad'
            src='https://images-fe.ssl-images-amazon.com/images/G/35/GiftCards/BM_AU_POSA_banner.jpg'
            alt=''/>
            {basket?.length === 0 ? (
                <div>
                    <h1>your basket is empty</h1>
                    <p>your have no items on your basket. to buy one or more 
                     items "click" add to basket next to the items </p>
                </div>
            ):(
                <div>
                    <h1 className='checkout__title'>your shopping basket</h1>
                    {/*check out all of the checkout products*/}
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout;
