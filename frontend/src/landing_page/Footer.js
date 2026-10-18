import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250, 250, 250)"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/logo.svg" style={{width:"50%"}}/>
                    <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>About</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Product</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Pricing</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Refferal programme</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Careers</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Zerodha.tech</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Press & media</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Zerodha cares (CSR)</a><br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a className='mb-3' href="" style={{textDecoration:"none"}}>Contact</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Support portal</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Z-connect blog</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>List of charges</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>downloads & resources</a><br/>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Open an account</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>Fund Transfer</a><br/>
                    <a className='mb-3' href='' style={{textDecoration:"none"}}>60 day challange</a><br/>
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"14pxs"}}>
            <p>Zerodha Broking Ltd.: Member fo NSE & BSE - SEBI Registration no: InZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. 
                - SEBI Registration no: IN-DP-100-2015 Commodity Trading Through Zerodha Commodity Trading through Zerodha Commodities Pvt. Ltd. 
                MCX: 46025 - SEBI Registration no: InZ000031633 Registration Adress: Zerodha #153/154, 4th Cross, Dollar Colony, Opp, 
                Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities Broking
                please write to complains@zerodha.com, for DP realted to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.</p>
            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID, 
                Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p>Investments in securities market are subject to market rrisks; read all the related documents carefully before investing.</p>
            <p>"Prevent unauthorised transaction in your account. Update your mobile numbers/email IDs with your stock brokers. Recieve 
                information of your transaction directly from Exchange on your mobile/email at the end of the day. Issued in the intrest 
                done through a SEBI registered intermediary (broker, DP, Mutual Funds etc.), you need not undergo the same process again 
                with you approach another intermediary."</p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;