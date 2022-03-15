<<<<<<< HEAD
import React from "react";
=======
>>>>>>> edd93532ce4b3f42e987032ab5978bd9fd333daf
import whatsHappening from "./whats-happening-data.json";
import './whats-happening.css'

function WhatsHappening() {
 return(
<<<<<<< HEAD
  <div className="ttr-whats-happening p-2">
   <div className="ttr-search position-relative">
    <i className="fas fa-search position-absolute"></i>
    <input className="bg-secondary bg-opacity-10 border-0 form-control form-control-lg rounded-pill ps-5"
           placeholder="Search Tuiter"/>
   </div>
   <div className="bg-secondary bg-opacity-10 ttr-rounded-15px mt-2 p-2">
=======
  <div class="ttr-whats-happening p-2">
   <div class="ttr-search position-relative">
    <i class="fas fa-search position-absolute"></i>
    <input class="bg-secondary bg-opacity-10 border-0 form-control form-control-lg rounded-pill ps-5"
           placeholder="Search Tuiter"/>
   </div>
   <div class="bg-secondary bg-opacity-10 ttr-rounded-15px mt-2 p-2">
>>>>>>> edd93532ce4b3f42e987032ab5978bd9fd333daf
    <h2>What's happening</h2>
    {
     whatsHappening.map(wh => {
       return(
<<<<<<< HEAD
         <div key={wh._id} className="ttr-whats-happening-tuit d-flex mb-3">
           <div className="flex-grow-1">
            <h3 className="fs-6 fw-lighter">
             {wh.topic} - {wh['hours-ago']} hours ago</h3>
            <div className="fw-bold mb-2 pe-1">
             {wh.content}
            </div>
            <h4 className="fs-6 fw-lighter">{wh.likes} likes</h4>
           </div>
           <div>
            <img src={`../images/${wh['user-logo']}`}
                 className="ttr-rounded-15px ttr-user-logo"/>
=======
         <div class="ttr-whats-happening-tuit d-flex mb-3">
           <div class="flex-grow-1">
            <h3 class="fs-6 fw-lighter">
             {wh.topic} - {wh['hours-ago']} hours ago</h3>
            <div class="fw-bold mb-2 pe-1">
             {wh.content}
            </div>
            <h4 class="fs-6 fw-lighter">{wh.likes} likes</h4>
           </div>
           <div>
            <img src={`../images/${wh['user-logo']}`}
                 class="ttr-rounded-15px ttr-user-logo"/>
>>>>>>> edd93532ce4b3f42e987032ab5978bd9fd333daf
           </div>
          </div>
       );
     })
    }
   </div>
  </div>
    );
}
export default WhatsHappening;