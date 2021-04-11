import React from 'react';
import doctor from '../../../images/doctor.png';

const MakeAppointment = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7"></div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;