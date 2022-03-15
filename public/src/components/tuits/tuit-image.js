<<<<<<< HEAD
import React from "react";
=======
>>>>>>> edd93532ce4b3f42e987032ab5978bd9fd333daf
const TuitImage = ({tuit}) => {
  return(
    <div className="position-relative">
      <img src={`../images/${tuit.image}`}
           className="mt-2 w-100 ttr-rounded-15px"/>
      {
<<<<<<< HEAD
        tuit.imageOverlay &&
        <span
          className={`fa-2x text-white fw-bold bottom-0
                      ttr-tuit-image-overlay position-absolute`}>
          {tuit.imageOverlay}
        </span>
      }
    </div>
  );
};
=======
        tuit['image-overlay'] &&
        <span
          className="fa-2x text-white fw-bold bottom-0 ttr-tuit-image-overlay position-absolute">
                      {tuit['image-overlay']}
                  </span>
      }
    </div>
  );
}
>>>>>>> edd93532ce4b3f42e987032ab5978bd9fd333daf
export default TuitImage;