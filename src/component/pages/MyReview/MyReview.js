import React, { useContext, useEffect, useState } from 'react';
import {myContxt} from '../../../contextApi/AuthContext'
import PersonalReview from '../../../SubComponent/PersonalReview/PersonalReview';

const MyReview = () => {

  const [myreviews, setmyreviews] = useState([])
  const {user} = useContext(myContxt)


  useEffect(() => {
    fetch(`http://localhost:5000/myreviw?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setmyreviews(data)
    })

  }, [user?.email])
  
const handleDelete = (myrvw) =>{

      fetch(`http://localhost:5000/userreview/${myrvw._id}`,{
          method : 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
              const remaining = myreviews.filter(usr => usr._id !== myrvw._id)
              setmyreviews(remaining)
      })
}



    return (
        <div className="overflow-x-auto w-11/12 sm:w-11/12 md:w-8/12 m-auto my-5">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th>service Name</th> 
        <th>Review Message</th>
        <th>Time</th>
        <th>Delete</th>
        <th>Edite</th>
      </tr>
    </thead>
    <tbody>
      {
        myreviews.map(myrvw => <PersonalReview handleDelete = {handleDelete} myrvw = {myrvw}  key = {myrvw._id}></PersonalReview> )
      }
    </tbody>
  </table>
</div>
    );
};

export default MyReview;