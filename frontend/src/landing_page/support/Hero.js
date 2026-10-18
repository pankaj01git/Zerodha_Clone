import React from 'react';

function Hero() {
    return(
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWraper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className='row mx-5'>
                <div className='col-6 mb-5 p-5'>
                    <h2 className='fs=6 mb-2'>Search for an answer or browse help topics to create a ticket</h2>
                    <input placeholder='Eg. How do I activate F&O' /><br/>
                    <a href="">Track account opening</a>&nbsp;&nbsp;
                    <a href="">Track segment activation</a>&nbsp;&nbsp;
                    <a href="">Intraday margins</a>&nbsp;&nbsp;
                    <a href="">Kite user manual</a>&nbsp;&nbsp;
                </div>
                <div className='col-6 p-5'>
                    <h2 className='fs=3 mb-5'>Featured</h2>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;