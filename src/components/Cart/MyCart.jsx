/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";


// const MyCart = ({card,handleDelete}) => {
//     const{product,setProduct} = useState({});
//     useEffect(() => {
//         fetch(`https://food-beverage-website-server-12zczvhde.vercel.appproduct/${card.productId}`)
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
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Hook/AuthProvider';
import Swal from 'sweetalert2';
import Carts from './Carts';

const MyCart = () => {
    const { user } = useContext(AuthContext);
   

    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('https://food-beverage-website-server-12zczvhde.vercel.app/cart')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(d => d.email == user.email);
                setCarts(filtered);
               
            })
            .catch(err => {
               console.log(err);
            })
    }, []);

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
            const info = { email: user.email, id: id }
            if (result.isConfirmed) {
                fetch("https://food-beverage-website-server-12zczvhde.vercel.app/cart", {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(info)
                })
                    .then(res => res.json())
                    .then(data => {
                        const filtered = carts.filter(cart => cart.prodId != id && user.email == cart.email);
                        setCarts(filtered);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Deleted from cart succesfully.',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                      
                    })
                    
            }
        })



    }
    return (
        <div>
           <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
           {
                carts.map(cart => <Carts key={cart._id} cart={cart} handleDelete={handleDelete} ></Carts>)
            }
            </div>
           
        </div>
    );
};

export default MyCart;