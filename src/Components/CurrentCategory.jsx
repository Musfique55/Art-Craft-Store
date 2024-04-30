import { Link, useLoaderData } from "react-router-dom";

const CurrentCategory = () => {
    const items = useLoaderData();
    return (
        <div >
            <div className="grid grid-cols-1 gap-6 nunito m-5 md:mx-12 md:grid-cols-2 lg:mx-20 lg:grid-cols-3">
            {
                items.map((item) => {
                const {image,itemName,subcategory,description,price,rating,processTime,_id} = item;
                    return <div key={item._id} className="border p-5">
                        <img src={image} alt="" className="w-full h-[316px] object-cover rounded-lg"/>
                        <div className="font-medium text-base flex justify-between items-center my-4">
                            <h3 className="text-xl font-semibold nunito">{itemName}</h3>
                            <p className="text-base font-medium nunito">{processTime}</p>
                        </div>
                        <p className="font-medium text-base my-3">{description}</p>
                        <div className="flex justify-between font-medium text-base items-center">
                            <p>${price}.00</p>
                            <p>Rating : {rating}</p>
                        </div>
                        <p  className="mb-3">Category : {subcategory}</p>
                        <Link to={`/details/${_id}`}><button className="bg-[#A1BE95] font-semibold px-6 py-3 text-white rounded-md">View Details</button></Link>
                    </div>
                })
            }
            </div>
        </div>
    );
};

export default CurrentCategory;