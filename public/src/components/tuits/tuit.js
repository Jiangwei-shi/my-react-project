<<<<<<< HEAD
import React from "react";
=======
>>>>>>> edd93532ce4b3f42e987032ab5978bd9fd333daf
import TuitStats from "./tuit-stats";
import TuitImage from "./tuit-image";
import TuitVideo from "./tuit-video";

<<<<<<< HEAD
const Tuit = ({tuit, deleteTuit}) => {
  return(
    <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
      <div className="pe-2">
        {
          tuit.postedBy &&
          <img src={`../images/${tuit.postedBy.username}.jpg`}
               className="ttr-tuit-avatar-logo rounded-circle"/>
        }
      </div>
      <div className="w-100">
          <i onClick={() => deleteTuit(tuit._id)} className="fas fa-remove fa-2x fa-pull-right"></i>
        <h2
          className="fs-5">
          {tuit.postedBy && tuit.postedBy.username}
          @{tuit.postedBy && tuit.postedBy.username} -
          {tuit.published}</h2>
        {tuit.tuit}
=======
const Tuit = ({tuit}) => {
  return(
    <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
      <div className="pe-2">
        <img src={`../images/${tuit['avatar-logo']}`}
             className="ttr-tuit-avatar-logo rounded-circle"/>
      </div>
      <div>
        <h2
          className="fs-5">{tuit.username} @{tuit.handle} - {tuit.published}</h2>
        {tuit.content}
>>>>>>> edd93532ce4b3f42e987032ab5978bd9fd333daf
        {
          tuit.youtube &&
            <TuitVideo tuit={tuit}/>
        }
        {
          tuit.image &&
          <TuitImage tuit={tuit}/>
        }
        <TuitStats tuit={tuit}/>
      </div>
    </li>
  );
}
export default Tuit;