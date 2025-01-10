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

<div className="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
  <div className="p-4 flex items-center justify-between">
    
    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
      Product Title
    </h2>

    
    <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
      Newzz
    </span>
  </div>

 
  <div className="p-4 text-gray-600 dark:text-gray-300">
    <p>
      This is a responsive card with a title and badge. Add more details here as required for your content.
    </p>
  </div>


  <div className="p-4 flex justify-end">
    <button className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">
      Action
    </button>
  </div>
</div>

<div className="bg-gray-100">
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-wrap -mx-4">
    
      <div className="w-full md:w-1/2 px-4 mb-8 border border-black">
        <img src={image} alt="Product"
                    className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage"/>
       
      </div>

    
      <div className="w-full md:w-1/2 px-4">
      <div className="py-2 pr-  flex items-center justify-between">
    
      <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100 pr-2">
        {name}
      </h2>
  
      
      <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold  tracking-wide">
       {brand}
      </span>
    </div>
        
        <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
        <div className="mb-4">
          <span className="text-2xl font-bold mr-2">$349.99</span>
          <span className="text-gray-500 line-through">$399.99</span>
        </div>
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="size-6 text-yellow-500">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="size-6 text-yellow-500">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="size-6 text-yellow-500">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="size-6 text-yellow-500">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="size-6 text-yellow-500">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
          <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
        </div>
        <p className="text-gray-700 mb-6">Experience premium sound quality and industry-leading noise cancellation
          with
          these wireless headphones. Perfect for music lovers and frequent travelers.</p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Color:</h3>
          <div className="flex space-x-2">
            <button
                            className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
            <button
                            className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
            <button
                            className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
          </div>
        </div>

        <div className="mb-6">
          <label for="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" value="1"
                  className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
                        className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to Cart
                    </button>
          <button
                        className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        Wishlist
                    </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Industry-leading noise cancellation</li>
            <li>30-hour battery life</li>
            <li>Touch sensor controls</li>
            <li>Speak-to-chat technology</li>
          </ul>
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