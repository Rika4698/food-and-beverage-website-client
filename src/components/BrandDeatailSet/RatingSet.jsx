/* eslint-disable react/prop-types */
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const RatingSet = ({rating}) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
   
    const starIcons = [];
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<FontAwesomeIcon key={i} icon={faStar} color="orange" />);
  }

  if (halfStar) {
    starIcons.push(<FontAwesomeIcon key="half" icon={faStarHalfStroke} color="orange" />);
  }
    return (
        <div>
            <div className="rating ">{starIcons}</div>
        </div>
    );
};

export default RatingSet;