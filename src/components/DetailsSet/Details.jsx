/* eslint-disable react/prop-types */

import { useContext,  useEffect,  useState} from "react";
import RatingSet from "../BrandDeatailSet/RatingSet";
import { AuthContext } from "../../Hook/AuthProvider";
// import Swal from "sweetalert2";
import swal from "sweetalert";
import axios from "axios";
import UseCart from "../../Hook/UseCart";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
        
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
            axios.post("https://food-beverage-website-server-qxnackit4.vercel.app/cart", cartItem)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    swal({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product added in cart.',
                        
                        buttons:{
            
                          Cart: {
                            text: "OK",
                            value: "Cart",
                          },
                        },
                      
                    }).then((value) => {
                      if (value === "Cart") {
                        // Redirect to the cart page
                        navigate("/cart"); 
                      }
                    });
                    refetch();
                }
            })
            .catch(err => {
                console.log(err);
                if (err.response && err.response.status === 400) {
                    swal({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Product already exists in the cart!',
                      
                    });
                    // swal("Oops!", "Product already exists in the cart!", "error");
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
            swal({
                position: "top-end",
                icon: "success",
                title: "Comment added successfully",
                showConfirmButton: false,
                timer: 1500,
                
               
            });
        } catch (error) {
            console.error("Error adding comment:", error);
            swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while adding comment. Please try again later.',
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
        <div className=" mt-[124px] lg:mt-[150px]">
            {/* border-[2px] border-black */}
            



<div className="bg-gray-100 dark:bg-slate-700">
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-wrap -mx-4">
    
      <div className="w-full md:w-1/2 px-4 mb-8 ">
        <img src={image} alt="Product"
                    className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage"/>
       
      </div>

    
      <div className="w-full md:w-1/2 px-4">
      <div className="py-2 pr-  flex items-center justify-between">
    
      <h2 className="text-xl lg:text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100 pr-2">
        {name}
      </h2>
  
      
      <span className="inline-block bg-teal-700 text-teal-100 dark:bg-teal-200 dark:text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-bold  tracking-wide ">
       {brand}
      </span>
    </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg mb-2">{type}</p>
     
          <h2 className="text-xl lg:text-2xl text-lime-700 dark:text-lime-300  font-bold mr-2 mb-2">Price: {price} TK</h2>
        
        
        <div className="flex items-center mb-4">
        <RatingSet   rating={rating}></RatingSet>
          <span className="ml-2 text-gray-600 text-base dark:text-gray-300">({rating})</span>
        </div>
        <h1 className="text-xl font-bold   text-teal-700 dark:text-teal-300 mb-2">Description:</h1>
        <p className="text-gray-700 dark:text-zinc-200 text-base mb-6">{details}</p>

       <hr className="border-1 border-slate-400"></hr>

        

        <div className="flex justify-center mt-4 mb-6">
          <button onClick={() => handleAddToCart(card)}
                        className="bg-gradient-to-r from-teal-300 to-blue-700 flex gap-2 items-center font-semibold text-lg text-white px-6 py-2 rounded-md hover:from-purple-300 hover:to-teal-600 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.8" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to Cart
                    </button>
          
        </div>

       
      </div>
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
         

      
    </div>


   
    );
};

export default Details;