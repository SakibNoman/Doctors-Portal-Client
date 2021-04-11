import React from 'react';

const ServiceDetail = ({ info }) => {
    return (
        <div className="col-md-4 text-center" >
            <img style={{ height: '50px' }} src={info.img} alt="" />
            <h5 className="my-3" >{info.name}</h5>
            <p className="text-secondary" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, corporis.</p>

        </div>
    );
};

export default ServiceDetail;