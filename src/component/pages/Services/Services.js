import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { myContxt } from '../../../contextApi/AuthContext';
import useTitleHooks from '../../../Hooks/useTitleHooks';
import ServiceCard from '../../../SubComponent/ServiceCard/ServiceCard'

const Services = () => {
    const allservices = useLoaderData()
    const {loadding} = useContext(myContxt)
    useTitleHooks('Services')
    if(loadding){
        return <div className="w-2/12 m-auto mt-10 bg-slate-300 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    return (
        <div className='w-10/12 grid md:grid-cols-3  my-10 gap-3 m-auto'>
            {
                allservices.map(service=> <ServiceCard kye = {service._id} service ={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;