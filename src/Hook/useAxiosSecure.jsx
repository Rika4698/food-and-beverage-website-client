import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: 'https://food-beverage-website-server-qxnackit4.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;