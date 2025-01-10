import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";



const Update = () => {
 const product = useLoaderData();
const{ _id,name, image, brand,photo,details, type,  price,rating } = product;

const handleUpdate = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const brand  = form.brand.value;
    const photo =form.photo.value;
    const details = form.details.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
  
    
    const updateProduct = { name, image, brand,photo, type, details, price,rating }

    console.log(updateProduct);
    // send data to the server
    fetch(`https://food-beverage-website-server-qxnackit4.vercel.app/product/${_id}`,{
        method:'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updateProduct)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0)
        {
        swal({
            title: 'Success!',
            text: 'Product Update Successfully ',
            icon:'success',
        })
        }

    })
}



    return (
        <div>
           

        <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-32 dark:bg-slate-700 ">
  <form onSubmit={handleUpdate}  id="productForm" className="bg-orange-100  rounded-lg p-6 w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl my-10 lg:my-14 shadow-slate-700 shadow-inner dark:bg-slate-300">
    <h2 className="text-2xl lg:text-4xl font-bold text-orange-600 mb-6 text-center mt-8 dark:text-black ">Update Product: <span className="text-cyan-600 dark:text-orange-600">{name}</span></h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 lg:mt-20 mx-4 ">
      {/* Product Name */}
      <div className="mb-4">
        <label htmlFor="productName" className="block text-base  font-semibold text-gray-600 mb-2 lg:text-xl dark:text-black">Product Name</label>
        <input
          type="text"
          name="name"
          defaultValue = {name}
          id="productName"
          placeholder="Enter product name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 dark:focus:ring-slate-900 focus:outline-none"
        />
      </div>

      {/* Photo URL */}
      <div className="mb-4">
        <label htmlFor="photoURL" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl dark:text-black">Photo Image</label>
        <input
          type="url"
          name="image"
          defaultValue={image}
          id="photoURL"
          placeholder="Enter photo URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 dark:focus:ring-slate-900 focus:outline-none"
        />
      </div>

      {/* Brand Name */}
      <div className="mb-4">
        <label htmlFor="brandName" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl dark:text-black">Brand Name</label>
        <input
          type="text"
          name="brand"
          defaultValue = {brand}
          id="brandName"
          placeholder="Enter brand name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 dark:focus:ring-slate-900   focus:outline-none"
        />
      </div>

      {/* Brand URL */}
      <div className="mb-4">
        <label htmlFor="brandURL" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl dark:text-black">Brand Image</label>
        <input
          type="url"
          name="photo"
          defaultValue={photo}
          id="brandURL"
          placeholder="Enter brand URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 dark:focus:ring-slate-900 focus:outline-none"
        />
      </div>

      {/* Product Type */}
      <div className="mb-4">
        <label htmlFor="productType" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl dark:text-black">Product Type</label>
        <input
          type="text"
          name="type"
          defaultValue={type}
          id="productType"
          placeholder="Enter product type"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 dark:focus:ring-slate-900 focus:outline-none"
        />
      </div>
       {/* Price */}
       <div className="mb-4">
        <label htmlFor="price" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl dark:text-black">Price</label>
        <input
          type="number"
          name="price"
          defaultValue ={price}
          id="price"
          placeholder="Enter price"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500  dark:focus:ring-slate-900 focus:outline-none"
        />
      </div>

       {/* Rating */}
       <div className="mb-4">
        <label htmlFor="rating" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl dark:text-black">Rating</label>
        <input
          type="number"
          name="rating"
          defaultValue ={rating} 
          id="rating"
          placeholder="Enter rating (e.g., 4.5)"
          step="0.1"
          max="5"
          min="0"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 dark:focus:ring-slate-900  focus:outline-none"
        />
      </div>

      {/* Short Description */}
      <div className="mb-4 lg:col-span-2">
        <label htmlFor="shortDescription" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl dark:text-black ">Short Description</label>
        <textarea
          id="shortDescription"
          type="text"
          name="details"
          defaultValue ={details}
          placeholder="Enter short description"
          rows="3"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 dark:focus:ring-slate-900 focus:outline-none"
        ></textarea>
      </div>

     

     
    </div>

    {/* Add Button */}
    <div className="mt-6 mb-4 text-center">
      <button
        type="submit"
        className="w-60 lg:w-7/12 text-xl bg-gradient-to-r from-orange-300 to-orange-600 dark:from-gray-300 dark:to-gray-700 text-slate-100 font-semibold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110   dark:text-zinc-950"
      >
        Submit
      </button>
    </div>
  </form>
</div>


        </div>
    );
};

export default Update;