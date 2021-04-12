import React from 'react';
import { Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/chair.png';

const AppointmentHeader = ({ handleDateChange }) => {

    return (
        <Row style={{ height: "600px" }} className="mx-0 align-items-center" >
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3a4256' }} > Appointment </h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />

            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </Row>
    );
};

export default AppointmentHeader;