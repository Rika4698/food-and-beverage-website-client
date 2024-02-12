/* eslint-disable react/prop-types */

import { useContext,  useEffect,  useState} from "react";
import RatingSet from "../BrandDeatailSet/RatingSet";
import { AuthContext } from "../../Hook/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import UseCart from "../../Hook/UseCart";
import useAxiosSecure from "../../Hook/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import { reload } from "firebase/auth";
// import { useTotalLength } from "../Cart/Cart";



const Details = ({card}) => {
    const[,refetch]=UseCart();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    
    const email = user.email;
    // const {  refetch } = useQuery({
    //     queryKey: ["card", card._id, email],
    //     queryFn: async () => {
    //       const res = await axiosSecure.get(`/product/${card._id}?email=${email}`);
    //       return res.data.result;
    //     },
    //   });
    const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
    const {_id, name, image, brand, type,details, price,rating } = card || {};
    // const {totalLength ,setTotalLength} = useTotalLength();
    // const [addedItems, setAddedItems] = useState([]);
    
        
//    console.log(_id);

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

    useEffect(() => {
        fetchComments();
    }, [_id]);

   
    
      const fetchComments = async () => {
        try {
            const response = await axiosSecure.get(`/cartComments/${_id}`);
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    // useEffect(() => {
    //     fetchComments();
    //   }, []);
    
    //   const handleCommentChange = (event) => {
    //     setComment(event.target.value);
    //   };
    
      const handleComment =   async (e) => {
        e.preventDefault();
        try {
            await axiosSecure.put(`/cartCommentUpdate/${_id}?comment=${comment}`);
            setComment(''); // Clear the input field after submitting
            fetchComments(); // Fetch the updated comments
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Comment added successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.error("Error adding comment:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while adding comment. Please try again later.'
            });
        }
    };

    // const handleComment = (e) => {
    //     e.preventDefault();
    //     const comment = e.target.comment.value;
    //     console.log(comment);
        
    //     axiosSecure.put(`/cartCommentUpdate/${_id}?comment=${comment}`)
    //       .then((res) => {
    //         console.log(res.data);
           
    //         if (res.data.modifiedCount>0) {
               
    //           Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "Comment added successfully",
    //             showConfirmButton: false,
    //             timer: 1500,
    //           });
    //           window.location.reload();
    //         }
           
    //       })
        
    //       .catch((error) => {
    //         console.error("Error adding comment:", error);
    //     });
        
    //   };

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

 <div className="w-[340px] md:w-[496px] lg:w-[700px] mx-auto my-10 bg-indigo-300 rounded-lg shadow-2xl">

          <div className="card-body">
         
            <h2 className="card-title text-3xl text-lime-700 font-bold">
             All Comments
            </h2>
            <div className="w-full h-80 bg-purple-200 rounded-lg overflow-y-auto">
              <div className="p-4">
                {comments?.map((item, index) => (
                  <div className=" flex gap-4" key={index}>
                    <h3 className="mt-1 text-lg">{index + 1}.</h3>
                    <h3 className="bg-blue-400 text-white  p-2 rounded-full inline-block">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            {/* comment form */}
            <form
            //   className={`${ isPro ? "" : "hidden"}`}
              onSubmit={handleComment}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Write Comment"
                  name="comment"
                  value={comment} onChange={(e) => setComment(e.target.value)}
                  className="input input-bordered w-full"
                />
                <button
                  type="submit"
                  className="bg-emerald-500 px-3 rounded-lg font-semibold text-white"
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div> 
         {/* <div>
            <h2>Comment Section</h2>
            <div>
                <form onSubmit={handleComment}>
                    <textarea
                        name="comment"
                        placeholder="Write your comment..."
                        value={comment}
                        onChange={handleCommentChange}
                    ></textarea>
                    <button type="submit">Add Comment</button>
                </form>
            </div>
            <div>
                <h3>All Comments</h3>
                <ul>
                    {allComments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
            </div>
        </div> */}
        </div>
    );
};

export default Details;