import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage () {
    return (
        <>
            <Hero/>
            <LeftSection 
            imageURL="media/kite.png" 
            productName="Kite" 
            productDescription="Our Ultra-fast trading platform with streaming market data, advanced charts, an elagant UI, and  more. Enjoy the kite experience Android and iOS devices." 
            tryDemo="" 
            learnMore="" 
            googlePlay="" 
            appStore=""
            />
            <RightSection 
            imageURL="media/console.png"
            productName="Console"
            productDescription="The central dashbord for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisation."
            learnMore=""
            />
            <LeftSection 
            imageURL="media/coin.png" 
            productName="Coin" 
            productDescription="Buy direct mutual funds online, commissiion-free, delivered directly to your demat account. Enjoy the coin experience on Android and iOS devices." 
            tryDemo="" 
            learnMore="" 
            googlePlay="" 
            appStore=""
            />
            <RightSection 
            imageURL="media/kiteconnect.png"
            productName="Kite Connect API"
            productDescription="Build powerful trading platform and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            learnMore="" 
            />
            <LeftSection imageURL="media/varsity.png" 
            productName="Varsity mobile" 
            productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
            tryDemo="" 
            learnMore="" 
            googlePlay="" 
            appStore=""
            />
            <p className='text-center mt-5 mb-5'>
                Want to know more about our technology stack? Check out the Zerodha.tech blog.
            </p>
            <Universe/>
        </>
    );
}

export default ProductPage;