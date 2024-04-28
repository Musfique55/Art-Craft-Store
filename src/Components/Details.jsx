import { useLoaderData } from "react-router-dom";

const Details = () => {
    const found = useLoaderData();
    const {image,itemName,subcategory,description,price,rating,agreement,processTime,stockcheck,email,username} = found;
    return (
        <div className="grid grid-cols-1 mx-5 gap-6 md:grid-cols-2 md:mx-12 lg:grid-cols-3 lg:mx-20">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3 className="text-">{itemName}</h3>
                <p>{subcategory}</p>
                <p>{description}</p>
                <p>${price}.00</p>
                <p>Rating {rating}</p>
                <p>Customizable : {agreement}</p>
                <p>Process Time : {processTime}</p>
                <p>{stockcheck}</p>
                <p>{email}</p>
                <p>{username}</p>
            </div>
        </div>
    );
};

export default Details;