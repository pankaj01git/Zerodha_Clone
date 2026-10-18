import React from "react";

function Hero() {
    return (
        <div className="container">
            <div className="row border-bottom mt-5 mb-5 text-center">
                <h1 className="fs-2">Pricing</h1>
                <h3 className="mb-5 text-muted mt-3 fs-4">Free equity investments and flat ₹20 intraday and F&O trades</h3>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-4 mt-5 p-4">
                    <img src="media/pricing0.svg"/>
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free -₹ 0 brokerage.</p>
                </div>
                <div className="col-4 mt-5 p-4">
                    <img src="media/intradayTrades.svg"/>
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades acress equity, currency, and commodity trades.</p>
                </div>
                <div className="col-4 mt-5 p-4">
                    <img src="media/pricingMF.svg"/>
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free -₹ 0 brokerage.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;