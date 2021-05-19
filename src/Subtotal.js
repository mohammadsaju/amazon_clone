import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { UseStateValue } from './StateProvider';
import {GetBasketTotal} from './reducer'

const Subtotal = () => {
    const [ {basket} ] = UseStateValue();
    return (
        <div className='subtotal'>
            {/*price*/}
            <CurrencyFormat
            renderText= {(value) => (
                <>
                <p>Subtotal ( { basket.length } items) : <strong>{` ${value} `}</strong></p>
                <small className='subtotal__gift'>
                    <input type='checkbox' /> This orders contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={GetBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button>proccesed to checkout</button>
        </div>
    )
}

export default Subtotal;
