import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bannar from '../../../SubComponent/Bannar/Bannar';
import ServiceCard from '../../../SubComponent/ServiceCard/ServiceCard'


const Home = () => {
   const services = useLoaderData()
    
    return (
        <div>
            <Bannar></Bannar>
           <div className="services_card w-10/12 grid md:grid-cols-3  my-10 gap-3 m-auto">
            {
                services.map(service=> <ServiceCard kye = {service._id} service ={service}></ServiceCard>)
            }
           </div>

        </div>
    );
};

export default Home;