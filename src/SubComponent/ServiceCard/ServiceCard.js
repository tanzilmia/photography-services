import React from "react";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { description, image, price, rating, service_name, _id } = service;
  let shorDescirption = description.slice(0,100)
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="h-80">
          <img src={image} className="h-full w-11/12 rounded-xl" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            {" "}
            <h2 className="card-title text-2xl text-purple-900 font-bold">{service_name}</h2>
            <h2 className="text-2xl font-bold text-yellow-500"> ${price} </h2>
          </div>
          <p> {shorDescirption}... </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
