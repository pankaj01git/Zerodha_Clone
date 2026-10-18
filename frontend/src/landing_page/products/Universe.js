import React from 'react';

function Universe () {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Enjoy your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3'>
                    <img src="media/smallcaseLogo.png" alt="Smallcase" style={{width: "100px"}} />
                    <p>Thematic investmeent platform</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media/streakLogo.png" alt="Streak" style={{width: "100px"}} />
                    <p>Alog & strategy platform</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media/sensibullLogo.svg" alt="Sensibull" style={{width: "100px"}}     />
                    <p>Options trading platform</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media/zerodhaFundhouse.png" alt="Zerodha Fundhouse" style={{width: "100px"}} />
                    <p>Asset management</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media/goldenpiLogo.png" alt="goldenapi" style={{width: "100px"}} />
                    <p>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media/dittoLogo.png" alt="Dicto" style={{width: "100px"}} />
                    <p>Insaurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin: "0 auto"}}> Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;