import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedServices = () => {
    return (
        <section className="pb-0 pb-md-5 my-5" >
            <div className="container mb-5  ">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0" >
                        <img className="img-fluid" src={featured} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center" >
                        <h1>Exceptional Dental Care, on your term</h1>
                        <p className="text-secondary my-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt veritatis at modi suscipit iure quae ullam esse commodi pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus quod, minima numquam dignissimos aperiam.</p>
                        <button className="btn btn-dark background-fresh border-0">Learn More</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FeaturedServices;