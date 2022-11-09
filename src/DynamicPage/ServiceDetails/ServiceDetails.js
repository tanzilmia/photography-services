import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
const ServiceDetails = () => {
  const service = useLoaderData();
  const { description, image, price, rating, service_name, _id } = service;
  console.log(service);
  return (
    <div className="w-10/12 m-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img className="rounded-lg" src={image} alt="" />
          <div>
            <h1 className="text-5xl font-bold"> {service_name} </h1>
            <p className="py-6 text-xl">{description}</p>
            <div className="flex">
              <h1 className="text-5xl font-bold text-sky-700"> $ {price} </h1>
              <h1 className="text-5xl font-bold ml-20 flex text-amber-400">
                {" "}
                <AiTwotoneStar /> {rating}{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* review section */}
    </div>
  );
};

export default ServiceDetails;
