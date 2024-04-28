import { useLoaderData } from "react-router-dom";

const Details = () => {
    const found = useLoaderData();
    const {image,itemName,subcategory,description,price,rating,agreement,processTime,stockcheck,email,username} = found;

    return (
        <div>
            <div className="grid grid-cols-1 mx-5 gap-6 md:grid-cols-2 md:mx-12 lg:grid-cols-3 lg:mx-20">
            <div className="relative">
                <img src={image} alt="" className="h-[450px] w-full"/>
                <p className="font-medium bg-[#A1BE95] p-2 rounded-md text-white text-sm absolute top-3 left-5">{stockcheck}</p>
            </div>
            <div  className="space-y-4">
                <h3 className="text-2xl font-semibold">{itemName}</h3>
                <div className="flex justify-between">
                <p className="text-xl text-[#F52449] font-normal">${price}.00</p>
                <p className=" text-[#F52449] font-normal">Rating {rating}</p>
                </div>
                <hr />
                <p className="text-[#A8A8A8] font-normal">{description}</p>
                <p className="font-semibold">Category : {subcategory}</p>
                <p className="text-[#F52449] font-semibold">Customizable : {agreement}</p>
                <p className="font-semibold">Process Time : {processTime}</p>
                <p className="text-[#A1BE95] font-semibold">Owner : {username}</p>
                <p className= "text-[#A1BE95] font-semibold">Contact :{email}</p>
            </div>
            <div >
                <div className="border space-y-4 p-5 mb-5">
                <h5 className="text-center">
                    Why Choose Us ?
                </h5>
                <hr className="w-10 mx-auto"/>
                <p className="text-center">Official Herschel stockist Australian warranty assistance & support Australian shipping & returns.Customer first experience environmentally focused</p>
                </div>
                <div className="border space-y-4 p-5">
                    <h5 className="text-center">
                        Returns
                    </h5>
                    <hr className="w-10 mx-auto"/>
                    <p className="text-center">Return this product within 100 days if you change your mind. Get a refund/replacement & free return shipping if it arrives damaged or not as described</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Details;