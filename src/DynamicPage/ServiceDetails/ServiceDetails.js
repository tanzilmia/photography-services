import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { description, image, price, rating, service_name, _id } = service;
    console.log(service)
    return (
        <div>
            <h2 className='text-2xl'> Service Details Page {service_name}</h2>
        </div>
    );
};

export default ServiceDetails;