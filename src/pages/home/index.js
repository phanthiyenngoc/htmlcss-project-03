import React from 'react';
import Appointment from '../../components/pages/home/Appointment';
import DownLoad from '../../components/pages/home/DownLoad';
import Feature from '../../components/pages/home/Feature';
import Hero from "../../components/pages/home/Hero";
import Member from '../../components/pages/home/Member';
import News from '../../components/pages/home/News';
import Search from '../../components/pages/home/Search';
import Services from '../../components/pages/home/Services';

const HomePageIndex = () => {
    return (
        <div>
            <Hero/>
            <Services/>
            <Search/>
            <Feature/>
            <Member />
            <DownLoad />
            <News/>
            <Appointment/>
        </div>
    );
};

export default HomePageIndex;