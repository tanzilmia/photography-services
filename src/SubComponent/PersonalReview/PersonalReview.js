import React from "react";
import { Link } from "react-router-dom";
import { BsFillPenFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';


const PersonalReview = ({myrvw,handleDelete}) => {
    const {review,service_name,time,_id} = myrvw

  return (
    <tr>
      <td>{service_name}</td>
      <td>{review}</td>
      <td>{time}</td>
      <td> <Link to = {`/edite/${_id}`}><button className="btn btn-info"> <BsFillPenFill/> </button></Link></td>
      <td> <button className="btn btn-info" onClick={()=>handleDelete(myrvw)}> <AiFillDelete/> </button> </td>
      
    </tr>
  );
};

export default PersonalReview;
