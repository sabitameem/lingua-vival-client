import React from 'react';
import Banner from './Banner';
import ExtraSection from '../extra/ExtraSection';
import { Helmet } from 'react-helmet';
import Slider from './Slider';
import TopClasses from '../topClasses/TopClasses';
import TopInstructors from '../topInstructors/TopInstructors';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home | LinguaViva</title></Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <TopClasses></TopClasses>
            <TopInstructors></TopInstructors>
            
            
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;