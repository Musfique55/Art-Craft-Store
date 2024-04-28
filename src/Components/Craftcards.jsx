import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Craftcards = ({item}) => {
    return (
        <div className="space-y-4 border p-5 rounded-lg flex flex-col flex-grow">
            <img src={item.image} alt="" className="w-full h-[316px] object-cover rounded-lg"/>
            <h3 className="text-xl font-semibold">{item.itemName}</h3>
            <h6 className="font-semibold">Price : ${item.price}.00</h6>
            <div className="font-semibold flex justify-between">
                <h6 >Rating : {item.rating}</h6>
                <h6>{item.stockcheck}</h6>
            </div>
             <Link to={`/details/${item._id}`}><button className="bg-[#A1BE95] font-semibold px-6 py-3 text-white rounded-md">View Details</button></Link>
        </div>
    );
};

Craftcards.propTypes = {
    item : PropTypes.object,
}
export default Craftcards;