import React from 'react';
import cavity from '../../../images/cavity.png';
import flouride from '../../../images/flouride.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Flouride Treatment',
        img: flouride
    },
    {
        name: 'Cavity Feeling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5" >
            <div className="text-center" >
                <h5 style={{ color: "#1CC7C1" }} >Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center" >
                <div className='row w-75 mt-5 pt-5' >
                    {
                        serviceData.map(each => <ServiceDetail info={each} ></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;