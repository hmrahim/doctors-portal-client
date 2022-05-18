import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons//phone.svg"

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-0 px-6'>
            <InfoCard logo={clock} bg="bg-primary" title="Opening Hours" desc="Lorem Ipsum is simply dummy text of the pri"></InfoCard>
            <InfoCard logo={marker} bg="bg-accent" title="Visit our location" desc="Brooklyn, NY 10036, United States"></InfoCard>
            <InfoCard logo={phone} bg="bg-primary" title="Contact us now" desc="+000 123 456789"></InfoCard>
        </div>
    );
};

export default Info;