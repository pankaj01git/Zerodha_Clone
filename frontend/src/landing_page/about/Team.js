import react from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <h1 className='fs-2 text-center mb-5'>
                    People
                </h1>
            </div>
            <div className='row broder-top text-muted' style={{lineHeight: "1.8", fontSize: "1.2rem"}}>
                <div className='col-6'>
                    <img src='media/nithinKamath.jpg' alt="Nithin Kamath" style={{borderRadius:"100%", width:"40%", marginLeft:"10%"}}/>
                    <div style={{marginLeft:"15%"}}>
                        <h4 className='mt-5'>Nithin Kamath</h4>
                        <h6>Founder & CEO</h6>
                    </div>
                </div>
                <div className='col-6'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010, to ovrcome the hurdles he faced during his decade long stint as a 
                        trader. today, Zerodha has changed th landscape of the Indian broking industry.
                    </p>
                    <p> He is a member of SEBI Secoundary 
                        Market Adivsory Committee (SMAC) and the market data advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen. <br/>
                        Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> <a href="" style={{textDecoration:"none"}}>TradingQaA</a> <a href="" style={{textDecoration:"none"}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;