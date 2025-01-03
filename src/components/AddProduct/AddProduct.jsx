import swal from "sweetalert";


const AddProduct = () => {
    const handleProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const image = form.image.value;
        const brand  = form.brand.value;
        const photo = form.photo.value;

        const type = form.type.value;
        const details = form.details.value;
        const price = form.price.value;
        const rating = form.rating.value;
      
        
        const newProduct = { name, image, brand,photo, type, details, price,rating }

        console.log(newProduct);
        // send data to the server
        fetch('https://food-beverage-website-server-qxnackit4.vercel.app/product',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId)
            {
            swal({
                title: 'okay!',
                text: 'Product Added Successfully ',
                icon:'success',
            })
            }

        })
    }
    return (
        <div>
             <div className="bg-[#f8e6f0] p-24">
            <h2 className="text-4xl font-extrabold text-center text-indigo-600 underline mb-10">Add a Product</h2>
            <form  onSubmit={handleProduct} >
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Product Name:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Product image:</span>
                        </label>
                        <label className="input-group">
                        <input type="url" placeholder="Photo URL" className="input input-bordered w-full"  name="image" />
                        </label>
                    </div>
                </div>
              
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Brand Name:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                            <span className="label-text font-semibold text-base">Brand image:</span>
                        </label>
                        <label className="input-group">
                        <input type="url" placeholder="Photo URL" className="input input-bordered w-full"  name="photo" />
                        </label>
                    </div>
                </div>
            
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Product Type:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Product type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Short description:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder=" Short Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Price:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Rating:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            
                
                <div className="text-center text-xl rounded-lg bg-green-800 w-40 h-8 text-white lg:ml-60 lg:w-96 xl:ml-96">
                <button >Add Button</button>
                </div>

            </form>
        </div> 
        </div>
    );
};

export default AddProduct;
