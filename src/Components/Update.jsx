const Update = () => {
    return (
        <div>
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
                    <button type="submit" className="bg-[#F52449] py-3 w-full text-white font-semibold rounded-lg">Update</button>
            </form>
        </div>
    );
};

export default Update;