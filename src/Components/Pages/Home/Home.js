import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Exeption from './Exeption';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exeption></Exeption>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;