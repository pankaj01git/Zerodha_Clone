import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Awards from './Avards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAcccount from '../OpenAccount';
import Footer from '../Footer'

function HomePage() {
    return ( 
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAcccount />
        </>
    );
}

export default HomePage;