import React from 'react';
import Banner from './Banner';
import ExtraSection from '../extra/ExtraSection';
import { Helmet } from 'react-helmet';
import Slider from './Slider';
import TopClasses from '../topClasses/TopClasses';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home | LinguaViva</title></Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <TopClasses></TopClasses>
            <h3>this is home</h3>
            <p>hello</p>
            <h3>hello</h3>
            
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;