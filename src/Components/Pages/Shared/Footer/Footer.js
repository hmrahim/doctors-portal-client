import React from 'react';

const Footer = () => {
    return (
        <div className='w-full  mt-32 bg-[url("https://i.ibb.co/kcFrFcY/footer-bg.png")]  bg-no-repeat'>
        <div className="md:w-10/12 mx-auto  px-6 md:px-0">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div>
                    <h3 className='text-xl text-accent font-bold my-2'>Services</h3>
                    <ul>
                        <li className='text-[16px] text-accent py-1'>Emergency Checkup</li>
                        <li className='text-[16px] text-accent py-1'>Monthly Checkup</li>
                        <li className='text-[16px] text-accent py-1'>Weekly Checkup</li>
                        <li className='text-[16px] text-accent py-1'>Deep Checkup</li>
                        
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl text-primaryBlack font-bold my-2'>ORAL HEALTH</h3>
                    <ul>
                        <li className='text-[16px] text-accent py-1'>Fluoride Treatment</li>
                        <li className='text-[16px] text-accent py-1'>Cavity Filling</li>
                        <li className='text-[16px] text-accent py-1'>Teath Whitening</li>
                       
                        
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl text-accent font-bold my-2'>OUR ADDRESS</h3>
                    <ul>
                        <li className='text-[16px] text-accent py-1'>New York - 101010 Hudson</li>
                      
                        
                    </ul>
                </div>
            </div>
            <div className='mt-5'>
                <p className='text-center text-xl text-accent py-5'>Copyright 2022 All Rights Reserved</p>
            </div>
    
        </div>
      </div>
    );
};

export default Footer;