<<<<<<< HEAD
import React from "react";
import './tuits.css';
import Tuit from "./tuit";

function Tuits({tuits = [], deleteTuit}) {
    return (
    <div>
      <ul className="ttr-tuits list-group">
        {
          tuits.map && tuits.map(tuit => {
            return (
              <Tuit key={tuit._id} deleteTuit={deleteTuit} tuit={tuit}/>
            );
          })
        }
      </ul>
    </div>
  );
}

=======
import tuits from "./tuits-data.json";
import './tuits.css';
import Tuit from "./tuit";

function Tuits() {
 return(
<ul class="ttr-tuits list-group">
 {
   tuits.map(tuit => {
     return(
       <Tuit tuit={tuit}/>
     );
   })
 }
</ul>
    );
}
>>>>>>> edd93532ce4b3f42e987032ab5978bd9fd333daf
export default Tuits;