/* eslint-disable react/prop-types */
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const RatingSet = ({rating}) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
   
    const starIcons = [];
    const iconClass = 'text-yellow-500 dark:text-yellow-300';
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<FontAwesomeIcon key={i} icon={faStar} className={iconClass}/>);
  }

  if (halfStar) {
    starIcons.push(<FontAwesomeIcon key="half" icon={faStarHalfStroke} className={iconClass}/>);
  }
    return (
        <div>
            <div className="rating gap-1  mt-2 text-slate-200 text-base ">{starIcons}</div>
        </div>
    );
};

export default RatingSet;