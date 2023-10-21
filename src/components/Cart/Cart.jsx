import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import swal from 'sweetalert';
import Swal from "sweetalert2";
import MyCart from "./MyCart";


const Cart = ({id}) => {
    const { user } = useContext(AuthContext);
    const {cart,setCart} = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/product/cart')
        .then(res => res.json())
        .then(data => {
            const final = data.filter((web) => web.email == user.email);
            setCart(final);
        })
        .catch(err => {
            console.log(err);
        })

            
    },[]);

    // const handleDelete = id ={
    //     // console.log(id)
    //     swal({
    //         // title: "Are you sure?",
    //         // text: "Once deleted you will not be able to recover this!",
    //         // icon: "warning"
    //         // // buttons: true,
    //         // // dangerMode: true
    //       })
    //       .then((result) => {
    //         const detail = {email: user.email, id: id}
    //         if (result.isConfirmed){
    //             fetch('http://localhost:5000/product/cart',{
    //                 method: 'DELETE',
    //                 headers:{
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(detail)
    //             })
    //             .then(res => res.json())
    //             .then(data =>{
    //                 const final = cart.filter((carts) => carts.productId != id && user.email == cart.email);
    //                 setCart(final);
    //                 if(data.deletedCount > 0)
    //                 {
    //                     Swal.fire({
    //                         position: 'center',
    //                         icon: 'success',
    //                         title: 'Your work has been saved',
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                       })
    //                 }
    //             })
    //             // .catch(err => {
    //             //     console.log();
    //             // })
    //         } handleDelete={handleDelete} 
    //       })

    // }
    return (
        <div>
             <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8"></div>
            {
                cart?.map(card => <MyCart
                    
                     key={card._id} card={card}></MyCart>)
            }
        </div>
    );
};

export default Cart;