import React from "react";

const PersonalReview = ({myrvw,handleDelete}) => {
    const {review,service_name,time,_id} = myrvw
   
  return (
    <tr>
      <td>{service_name}</td>
      <td>{review}</td>
      <td>{time}</td>
      <td> <button className="btn btn-info" onClick={()=>handleDelete(myrvw)}>Delete</button> </td>
      <td>Edite</td>
    </tr>
  );
};

export default PersonalReview;
