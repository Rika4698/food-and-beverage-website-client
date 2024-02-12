/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";


// const MyCart = ({card,handleDelete}) => {
//     const{product,setProduct} = useState({});
//     useEffect(() => {
//         fetch(`http://localhost:5000product/${card.productId}`)
//         .then(res => res.json())
//         .then(data =>{
//             setProduct(data);
//         })
//         .catch(()=>{
            
//         })
// },[]);
//     return (
//         <div>
//             <div className="card h-[600px] bg-green-100 shadow-xl">
//   <figure><img className=" w-[250px] h-[250px] lg:w-[280px] lg:h-[300px] pt-10" src={product.image} alt="" /></figure>
//   <div className="card-body">
//     <h1 className="card-title font-bold">
//       {name}
//       <div className="badge badge-secondary text-center  w-20 h-10">{brand}</div>
//     </h1>
//     <p>{type}</p>
   
//     <div className="flex gap-2">
//     <RatingSet  rating={rating}></RatingSet>
//     <p className="text-base  ">({rating})</p>
//   </div>
//   <h1 className="text-xl text-rose-500 font-bold ">Price: {price} TK</h1>
//     <div className="card-actions justify-between mt-4">
//     <Link to={`/details/${_id}`}>  
//     <button className="btn capitalize text-lg bg-green-300" >View Details</button>
//     </Link>
   
//      <button onClick={()=>handleDelete(product._id)} className="btn capitalize text-lg bg-orange-300">Update</button>
    
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default MyCart;
// import  { useContext } from 'react';
// import { AuthContext } from '../../Hook/AuthProvider';
import Swal from 'sweetalert2';
import Carts from './Carts';
import UseCart from '../../Hook/UseCart';
import useAxiosSecure from '../../Hook/useAxiosSecure';

// import { useTotalLength } from './Cart';


const MyCart = () => {
    // const { user } = useContext(AuthContext);
   
    const[cart,refetch] = UseCart();
    //  const email =user.email;
    const axiosSecure = useAxiosSecure();
    // const {totalLength ,setTotalLength} = useTotalLength();

    // const [carts, setCarts] = useState([]);
    // const { totalLength , setTotalLength } = useTotalLength();
    // useEffect(() => {
    //     fetch('http://localhost:5000/cart')
    //         .then(res => res.json())
    //         .then(data => {
    //             const filtered = data.filter(d => d.email == user.email);
                
    //             setCarts(filtered);
    //             // setTotalLength(filtered.length); 
              
    //             // console.log('my cart',setTotalLength);
               
               
    //         })
    //         .catch(err => {
    //            console.log(err);
    //         })
    // }, []);
    //   const totalLength = carts.length;
    // export { totalLength };
    

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log(result);
            // const info = { email: user.email, id: id }
            if (result.isConfirmed) {
              axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                       console.log(res);
                        if ((res.data.deletedCount > 0)) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Deleted from cart succesfully.',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            refetch()
                            // setTotalLength(totalLength - 1);
                        }
                      
                    }
                    )
                    
            }
        })
    };

    // const handleDeleteAll = () => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: ' Delete all items in your cart.',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete all!'
    //     }).then((result) => {
    //         console.log(result);
    //         if (result.isConfirmed) {
    //             // const email = user.email; // Assuming user is defined somewhere in your component
    //             if (email) {
    //                 fetch(`http://localhost:5000/cart/${email}`, {
    //                     method: 'DELETE',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                     },
    //                 })
    //                 .then(response => {
    //                     if (!response.ok) {
    //                         throw new Error('Failed to delete cart items');
    //                     }
    //                     return response.json();
    //                 })
    //                 .then(data => {
    //                     console.log(data);
    //                     // Handle success, for example, show a confirmation message
    //                 })
    //                 .catch(error => {
    //                     console.error('Error deleting cart items:', error);
    //                     // Handle error, for example, show an error message to the user
    //                 });
    //             }
            
    //         }
    //     });
    // };
    
    



    return (
        <div>
             {/* <button onClick={handleDeleteAll} className="btn capitalize text-lg bg-green-300" >Delete</button> */}
             {
                cart.length < 1 ?
                <h1 className="text-center font-bold text-4xl text-rose-500 pt-8 mb-20">You have not added anything!!</h1>
                :
                <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
                {
                     
                     cart.map(cart => <Carts key={cart._id} cart={cart} handleDelete={handleDelete} ></Carts>)
                 }
                 </div>
             }
          
           
           
        </div>
        
    );
    
};
// export { totalLength };
export default MyCart;