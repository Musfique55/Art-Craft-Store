import Swal from "sweetalert2";

const AddItems = () => {

    const handleSubmit = (e) => {
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
        const email = form.email.value;
        const username = form.username.value;
        const user = {image,itemName,subcategory,description,price,rating,agreement,processTime,stockcheck,email,username};
        fetch('https://art-craft-store-server-rose.vercel.app/crafts',{
            method : 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500
              });
            form.reset();
            console.log(data);
        })
        console.log(image,itemName,subcategory,description,price,rating,agreement,processTime,stockcheck,email,username);
    }
    return (
        <div className="mx-20">
            <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Image Url" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Item Name" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <input type="text" name="subcategory" placeholder="Item Name" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Write here" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <div className="flex gap-5">
                        <label><input type='radio' name="agreement" value="Yes" ></input>Yes</label>
                        <label><input type='radio' name="agreement" value="No"></input>No</label>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input type="text" name="processtime" placeholder="processing time" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <div className="flex gap-5">
                        <label><input type='radio' name="stockcheck" value="In stock" ></input>In stock</label>
                        <label><input type='radio' name="stockcheck" value="Made to Order"></input>Made to Order</label>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email Address" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="username" placeholder="User Name" className="input input-bordered"  required/>
                    </div>
                    <button type="submit" className="bg-[#F52449] py-3 w-full text-white font-semibold rounded-lg mt-5" >Add</button>
            </form>
        </div>
    );
};

export default AddItems;