import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";


const DetailsSet = () => {
    const[card,setCard] = useState({});
    const product = useLoaderData();
    const {_id} = useParams();
        
  
        useEffect(() => {
            const findCard = product.find((products) => products._id == _id);
            // console.log(findCard);
                setCard(findCard);

            },[_id,product])
            // console.log(card);


    return (
        <div>
            <Details card={card}></Details>
        </div>
    );
};

export default DetailsSet;