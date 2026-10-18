import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5'>
                <h1 className='fs-2 text-center'>
                    We pioneered discount broking in India. <br/>Now we are breaking ground with other technology.
                </h1>
            </div>
            <div className='row broder-top text-muted' style={{lineHeight: "1.8", fontSize: "1.2rem"}}>
                <div className='col-6 p-5'>
                    <p>
                        We kick-started coperations on the 15th of August, 2010 with the goal of breaking all bariers that traders and 
                        investors face in india in term of cost, support, and technology. We named the company Zerodha, a combination of
                        Zero and "Rodha", the Sanskrit workd for barrier
                    </p>
                    <p>
                        Today, our discruptive pricing models adn in-house technology have made us the largest stock broker in India.
                    </p>
                    <p>
                        Over 1+ crore clients place millions of orders daily on our platforms, contributing to over 15% of all retail order volumes.
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <p>
                        In addition, we run a number of popular open online educationl community intiatives to empower retail traders and investors.
                    </p>
                    <p>
                        <a href="" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of gowing the inidan capipal markets.
                    </p>
                    <p>
                        And yet, we are always up to something new. We are constantly looking for ways to improve the experience of our clients, 
                        and we are always looking for new challenges to tackle.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;