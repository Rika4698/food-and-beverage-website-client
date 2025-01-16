import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: 'https://food-beverage-website-server-4qxpcyz1w.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;