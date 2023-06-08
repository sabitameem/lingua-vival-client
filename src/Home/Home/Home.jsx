import React from 'react';
import Banner from './Banner';
import ExtraSection from '../extra/ExtraSection';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home | LinguaViva</title></Helmet>
            <Banner></Banner>
            <h3>this is home</h3>
            <p>hello</p>
            <h3>hello</h3>
            
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;