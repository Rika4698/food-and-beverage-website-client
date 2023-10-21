import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";



const Update = () => {
 const product = useLoaderData();
const{ _id,name, image, brand, type,  price,rating } = product;

const handleUpdate = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const brand  = form.brand.value;

    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
  
    
    const updateProduct = { name, image, brand, type,  price,rating }

    console.log(updateProduct);
    // send data to the server
    fetch(`http://localhost:5000/product/${_id}`,{
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
           <div className="bg-[#f7d6c1] p-24">
            <h2 className="text-4xl font-extrabold  text-[#0cbd9f] underline mb-10">Update Product: {name}</h2>
            <form onSubmit={handleUpdate} >  
                {/* onSubmit={handleProduct}  */}
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Product Name:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue = {name} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Product image:</span>
                        </label>
                        <label className="input-group">
                        <input type="url" placeholder="Photo URL" className="input input-bordered w-full"  name="image" defaultValue={image} />
                        </label>
                    </div>
                </div>
              
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Brand Name:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue = {brand} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <div className="form-control ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Product Type:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} placeholder="Product type" className="input input-bordered w-full" />
                        </label>
                    </div>
                   
                </div>
    
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Price:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue ={price}  placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Rating:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue ={rating}  placeholder="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            
                
                <div className="text-center text-xl rounded-lg bg-[#f89233] w-40 h-8 text-white lg:ml-60 lg:w-96 xl:ml-96">
                <button >Submit</button>
                </div>

            </form>
        </div>  
        </div>
    );
};

export default Update;