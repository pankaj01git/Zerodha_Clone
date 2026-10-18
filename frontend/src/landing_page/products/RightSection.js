import React from 'react';

function RightSection ({imageURL, productName, productDescription, learnMore}) {
    return (
        <div className='container'>
            <div className='row mt-5 align-items-center'>
                <div className='col-6'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore}> Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-6 '>
                    <img src={imageURL} alt={productName} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;