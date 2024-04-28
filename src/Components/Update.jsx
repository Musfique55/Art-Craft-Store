import { useLoaderData } from "react-router-dom";

const Update = () => {
    const update = useLoaderData();
    const  {image,itemName,subcategory,description,price,rating,agreement,processTime,stockcheck,_id} = update;
    
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const itemName = form.name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const agreement = form.agreement.value;
        const processTime = form.processtime.value;
        const stockcheck = form.stockcheck.value;
        const user = {image,itemName,subcategory,description,price,rating,agreement,processTime,stockcheck};
        fetch(`https://art-craft-store-server-zeta.vercel.app/crafts/${_id}`,{
            method : 'PUT',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="mx-5 space-y-5 md:mx-12 lg:mx-20">
             <form onSubmit={handleUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" defaultValue={image} placeholder="Image Url" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={itemName} placeholder="Item Name" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <input type="text" name="subcategory" defaultValue={subcategory} placeholder="Category Name" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} placeholder="Write here" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" defaultValue={rating} className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <div className="flex gap-5">
                        <label><input type='radio' name="agreement" value="Yes"  defaultChecked={agreement ==='Yes' ? 'Yes' : ''}></input>Yes</label>
                        <label><input type='radio' name="agreement" value="No" defaultChecked={agreement ==='No' ? 'No' : ''}></input>No</label>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input type="text" name="processtime" placeholder="processing time" className="input input-bordered" defaultValue={processTime}  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <div className="flex gap-5">
                        <label><input type='radio' name="stockcheck" value="In stock" defaultChecked={stockcheck === "In stock" ? "In stock" : ''}></input>In stock</label>
                        <label><input type='radio' name="stockcheck" value="Made to Order" defaultChecked={stockcheck === "Made to Order" ? "Made to Order" : ''}></input>Made to Order</label>
                        </div>
                    </div>
                    <button type="submit" className="bg-[#F52449] py-3 w-full text-white font-semibold rounded-lg">Update</button>
            </form>
        </div>
    );
};

export default Update;