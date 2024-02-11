/* eslint-disable react/prop-types */

import { useContext } from "react";
import RatingSet from "../BrandDeatailSet/RatingSet";
import { AuthContext } from "../../Hook/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import UseCart from "../../Hook/UseCart";
// import { useTotalLength } from "../Cart/Cart";



const Details = ({card}) => {
    const { user } = useContext(AuthContext);
    const[,refetch]=UseCart();
    const email = user.email;
    const {_id, name, image, brand, type,details, price,rating } = card || {};
    // const {totalLength ,setTotalLength} = useTotalLength();
    // const [addedItems, setAddedItems] = useState([]);
    const handleAddToCart =(card) =>{
        // const info = {id,email}
        // console.log(info);
        if(user&& email){
            console.log(email,card);
            const cartItem = {
                proId: _id,
                email,
                name,
                image,
                price,
                brand,
                type,
                rating
            }
            axios.post("http://localhost:5000/cart", cartItem)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product added in cart.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
            .catch(err => {
                console.log(err);
                if (err.response && err.response.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Product already exists in the cart!',
                    });
                }
            });
        }
    
       
    };



    return (
        <div>
            {/* border-[2px] border-black */}
            <div className="card mb-8  lg:card-side bg-base-100 shadow-xl">
  <figure className=" "><img className="" src={image} alt=""/></figure>
  <div className="card-body w-auto bg-pink-50 lg:w-[280px] xl:w-[300px] ">
    <div className="flex gap-8 ">
    <h2 className="card-title">{name}</h2>
    <div className="badge badge-secondary text-center font-bold w-20 h-10 lg:h-8">{brand}</div>
    </div>
    <h1 className="">{type}</h1>
    <div className="flex gap-2  ">
    <RatingSet  rating={rating}></RatingSet>
    <p className="text-base  ">({rating})</p>
  </div>
  <h1 className="text-xl text-rose-500 font-bold ">Price: {price} TK</h1>
  <h1 className="text-lg font-bold underline text-blue-900">Description:</h1>
  <h3 className="text-center text-base text-sky-900">{details}</h3>
 
    

    <div className="card-actions justify-end">
        {/* <Link to='/cart'> */}
      <button onClick={() => handleAddToCart(card)} className="btn capitalize bg-fuchsia-500 text-white text-lg">Add to Cart</button>
      {/* </Link> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;