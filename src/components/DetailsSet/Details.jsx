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
import { LuDelete } from "react-icons/lu";
// import { useQuery } from "@tanstack/react-query";
// import { reload } from "firebase/auth";
// import { useTotalLength } from "../Cart/Cart";



const Details = ({card}) => {
    const[,refetch]=UseCart();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    console.log(user);
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
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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

  

   // Fetch comments
   const fetchComments = async () => {
    try {
        setIsLoading(true);
        setError(null);
        // console.log("Fetching comments for ID:", _id); // Debug log
        
        const response = await axiosSecure.get(`/cartComments/${_id}`);
        // console.log("Response data:", response.data); // Debug log
        
        if (Array.isArray(response.data)) {
            setComments(response.data);
        } else {
            setComments([]);
            console.warn("Comments data is not an array:", response.data);
        }
    } catch (error) {
        console.error("Error details:", error.response || error); // Debug log
        setError("Failed to load comments. Please try again later.");
        setComments([]);
    } finally {
        setIsLoading(false);
    }
};

useEffect(() => {
    if (_id) {
        fetchComments();
    }
}, [_id, axiosSecure]);

// Add comment
const handleComment = async (e) => {
    e.preventDefault();
    if (!comment.trim() || !user) return;

    try {
        const commentData = {
            text: comment,
            userId: user.uid,
            userEmail: user.email,
            userName: user.displayName || 'Anonymous',
            userPhoto: user.photoURL || '/default-avatar.png',
            timestamp: new Date().toISOString(),
            productId: _id
        };

        // console.log("Sending comment data:", commentData); // Debug log

        const response = await axiosSecure.post(`/addComment/${_id}`, commentData);
        console.log(response);
        if (response.data.success) {
            setComment('');
            await fetchComments();
            swal({
                position: "top-end",
                icon: "success",
                title: "Comment added successfully",
                
                timer: 1500,
            });
        }
    } catch (error) {
        console.error("Error adding comment:", error);
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to add comment. Please try again.',
        });
    }
};




const handleDeleteComment = async (commentId) => {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        buttons: {
            cancel: {
                text: "Cancel",
                visible: true,
                className: "bg-gray-400 text-white py-2 px-4 rounded-lg hover:none"
            },
            confirm: {
                text: "Yes, delete it!",
                className: "bg-red-600 text-white py-2 px-4 rounded-lg"
            }
        },
        dangerMode: true,
    }).then(async (willDelete) => {
        if (willDelete) {
            try {
                // Assuming _id and axiosSecure are properly defined in the scope
                const response = await axiosSecure.delete(`/deleteComment/${_id}/${commentId}`);
                
                if (response.data.success) {
                    // Re-fetch comments after successful deletion
                    await fetchComments();
                    
                    // Show success message
                    swal({
                        position: "top-end",
                        icon: "success",
                        title: "Comment deleted successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    // Handle case when API responds but deletion isn't successful
                    swal({
                        icon: 'error',
                        title: 'Oops...',
                        text:'Failed to delete comment. Please try again.',
                    });
                }
            } catch (error) {
                console.error("Error deleting comment:", error);
                // Show error message
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to delete comment. Please try again.',
                });
            }
        }
    });
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
    // console.log(comments);

    return (
        <div className=" mt-[124px] lg:mt-[150px] ">
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

 <div className="dark:bg-slate-700  py-8 ">
  <section className="w-full rounded-lg border-2 border-purple-600 p-4 my-8 mx-auto max-w-3xl dark:border-purple-400 dark:bg-slate-600 ">
    <h3 className="font-os text-xl font-bold mb-4 dark:text-slate-50" >All Comments</h3>
    <div className="w-full h-80  rounded-lg overflow-y-auto overflow-x-hidden">
    {isLoading ? (
         <div className="flex justify-center items-center h-full">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-300"></div>
             </div>
         ) : error ? (
             <div className="text-red-500 text-center p-4">{error}</div>
          ) : comments.length === 0 ? (
               <div className="text-gray-500 text-lg text-center p-6 dark:text-gray-300">No comments yet. Be the first to comment!</div>
          ) : (<>
         {comments.map((commentItem) => (                    
    <div key={commentItem._id} className=" mr-3 mt-4 border rounded-lg p-3  border-slate-400 ">
         

         <div className="flex items-center justify-between ">

          <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center ">
            <img className="h-12 w-12 rounded-full object-cover" src={commentItem.userPhoto} alt={commentItem.userName} onError={(e) => { e.target.src = '/default-avatar.png';
                                                    }} />
        </div>

        <div className="ml-3">
            <div className="font-medium text-purple-800 dark:text-white">{commentItem.userName}</div>
            <div className="text-gray-600 dark:text-gray-300">Posted on {new Date(commentItem.timestamp).toLocaleString('en-GB', 
       {
        //    weekday: 'short',
            year: 'numeric',
            month: 'short',
             day: 'numeric',
            hour: '2-digit', 
            minute: '2-digit',
           second: '2-digit'
                         }) 
                        }
                        </div>
            </div>
                </div>
                <div>
        {user?.email === commentItem.userEmail && (
                <button
                 onClick={() => handleDeleteComment(commentItem._id)}
                         className="text-red-400 hover:text-red-700 transition-colors mr-4 dark:text-red-300 dark:hover:text-red-600  "
                             title="Delete comment">
                    <LuDelete className="" size="22"></LuDelete>
                                                </button>
                                            )}</div>
                                            </div>

                                            <div className=" ml-[68px]">
                                                <h3 className="my-1 text-purple-800 mr-4 break-words text-lg dark:text-white">
                                        {commentItem.text}
                                                  
                                                </h3>
                                            </div>
        

    </div>))}</>

)} </div>

   

    {user ? (
    <form onSubmit={handleComment}  className="mt-4">
        

        <div className="mb-4">
            <label  className="block text-purple-800 dark:text-white font-medium pb-2">Comment</label>
            
            <textarea id="comment" name="comment" type="text"
                                    placeholder="Write a comment..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)} className="border-2  border-purple-600 dark:border-purple-400 p-2 w-full rounded" required></textarea>
        </div>
       
        <button  type="submit"
                                    disabled={!comment.trim()}
                                    className={`text-white font-medium py-2 px-4 rounded 
                                        ${
                                        comment.trim() 
                                            ? 'bg-purple-700  hover:bg-purple-600 dark:bg-purple-500 dark:hover:bg-purple-600' 
                                            : 'bg-gray-400 cursor-not-allowed'
                                    }`}
                    >Post
                    Comment
        </button>
    </form>
    ) : (
        <div className="text-center mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-600">
                Please <a href="/login" className="text-blue-500 hover:underline">login</a> to add a comment
            </p>
        </div>
    )}
</section>
</div>        
           
         

      
    </div>


   
    );
};

export default Details;