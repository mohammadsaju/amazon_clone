import React from 'react'
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg' alt='' />
            {/* id,title,price,rating,image */}
            <div className='home__row'>
            <Product
            id='123456'
            title='The lean startup: how constants innovation creates radically successful business paperback'
            price={11.96}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
            />
            <Product
            id='1234562'
            title='This just in! Apple has unveiled the all-new iPhone 12 (PRODUCT)'
            price={96.21}
            rating={4}
            image='https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1602686328042-601UYWSRVF16QBZ47WX8/ke17ZwdGBToddI8pDm48kIgftY7vDlOSnYYnzu2ipntZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyOQ28Le4rQDeZRNZZaaLRkFFlIFz3qEQy4Rft1GI61kHkdIds9RwHmE1mg3Fzesko/iPhone+12+%28PRODUCT%29RED'
            />
            </div>

            <div className='home__row'>
            <Product
            id='12342456'
            title='cannon d for taking good picture'
            price={25.35}
            rating={3}
            image='https://www.awesomedynamic.com/wp-content/uploads/2018/02/awesome-dynamic-amazon-product-photography-camera.png'
            />
            <Product
            id='12223456'
            title='its awesome and usefull'
            price={45.11}
            rating={5}
            image='https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd'
            />
            <Product
            id='1234523556'
            title='microphone is the best things to record'
            price={60.25}
            rating={5}
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlODRk_O003vlcnQmEpBnpU-gTHhUmhSPOhg&usqp=CAU'
            />
            </div>

            <div className='home__row'>
            <Product
            id='123472556'
            title='The lean startup: how constants innovation creates radically successful business paperback'
            price={125.36}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
            />
            </div>
            
            {/* product */}
        </div>
    )
}

export default Home
