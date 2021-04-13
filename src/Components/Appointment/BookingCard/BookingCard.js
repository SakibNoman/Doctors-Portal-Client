import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-fresh">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-dark border-0 background-fresh text-uppercase">Book Appointment</button>
                    <AppointmentForm appointmentOn={booking.subject} modalIsOpen={modalIsOpen} closeModal={closeModal} ></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;