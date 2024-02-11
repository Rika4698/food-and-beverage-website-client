import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const UseCart = () => {
    const axiosSecure = useAxiosSecure();

    const{user} = useContext(AuthContext);
    // console.log(user.email);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/cart?email=${user.email}`);
            return res.data;
        }
    })
       
    
    return [cart,refetch]
};

export default UseCart;