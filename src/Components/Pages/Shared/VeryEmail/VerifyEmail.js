import React from 'react';

const VerifyEmail = () => {
    const verifyEmail = ()=> {
        
    }
    return (
        <div className='md:w-2/5 lg:2/5 mx-auto  w-full mt-4 px-6 mx-auto shadow-xl rounded-xl'>
            <div className='py-5'>
                <h1 className='text-center text-red-500 text-2xl'>Please verify your email and brawose all fetures.</h1>
                <p className='text-xl text-center'>Send varification email <span className='cursor-pointer text-secondary' onClick={verifyEmail}>Click to  Send email..</span></p>
                
            </div>
        </div>
    );
};

export default VerifyEmail;