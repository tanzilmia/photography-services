import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import {myContxt} from '../../contextApi/AuthContext'
import './Servicedetails.css'
const ServiceDetails = () => {
 const [reviews, setreviews] = useState([])
 const {user} = useContext(myContxt)
 console.log(user)

  const service = useLoaderData();
  const { description, image, price, rating, service_name, _id } = service;
 
//   get user review 
  const submitReview = (event) =>{
    event.preventDefault()
    const form = event.target;
    const review = form.review.value
   

    const userReview = {
        username : user?.displayName,
        review : review,
        userImg: user?.photoURL,
        service_name : service_name
    }
    console.log(userReview);


    fetch('http://localhost:5000/userreview',{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(userReview)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))


    form.reset()


  }



  return (
    <div className="w-10/12 m-auto my-5">
      <div className="hero my-5 rounded-md shadow-md bg-base-200">
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

      {/* send Review  */}
      <div className="review_section m-auto w-5/12">
        <h2 className="text-5xl text-center my-10">Send Your Review </h2>
            <form onSubmit={submitReview}>
             <div className="form_div">
            <input type="text" name = 'review' placeholder=" Enter Your Review Here " required />
            <button type="summit">Submit</button>
             </div>
            </form>
      </div>

      {/* cusotomer Reviw  */}
      <div className="customer_reviews">

      </div>

    </div>

  );
};

export default ServiceDetails;
