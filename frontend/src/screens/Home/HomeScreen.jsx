import React from 'react';

import CardMenu from '../../components/CardMenuSet/CardMenu';
import Meta from '../../components/Helmet/Meta';
import OurServices from '../../components/OurServices/OurServices';
import SliderComponent from '../../components/Slider/Slider';

const HomeScreen = () => {

    return (
        <>
            <Meta />
            <SliderComponent />
            <CardMenu />
            <OurServices />
        </>
    )
}

export default HomeScreen;
