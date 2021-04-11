import React from 'react';
import { Row } from 'react-bootstrap';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <Row style={{ height: "600px" }} className="mx-0 align-items-center" >
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3a4256' }} >Your New Smile <br /> Starts Here </h1>
                <p className="text-secondary" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam deleniti iusto voluptatem nesciunt, quasi totam.</p>
                <button className="btn btn-dark background-fresh border-0">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </Row>
    );
};

export default HeaderMain;