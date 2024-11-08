import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
    const {user} = useContext(AuthContext) || {};
    const [lists,setLists] = useState([]);
    const [isLoading,setLoading] = useState(true);

    useEffect(() => {
            setLoading(true);
            fetch(`https://art-craft-store-server-rose.vercel.app/craft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLists(data);
                setLoading(false);
            })
        },[user])
     
    const handleDelete = (id) => {
        fetch(`https://art-craft-store-server-rose.vercel.app/crafts/${id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    if(data.deletedCount ) {
                    const remaining = lists.filter(list => list._id !== id);
                    setLists(remaining);
                }
                }
              })
        })
    }
    const handleFilter = (e) => {
        const agreement = e.target.value;
        const found = lists.filter((item) => item.agreement === agreement);
        setLists(found);
    }
    
    return (
        <div >
            <h2 className="text-4xl font-bold text-center mb-10">My Art & Craft List</h2>
            <form onChange={handleFilter} className="mx-auto text-center mb-10">
                <select id="agreement" name="agreement">
                    <option value="none">Select Customization</option> 
                    <option value="Yes">Yes</option>
                    <option value="No" >No</option>
                </select>
            </form>
            {isLoading && <div className='flex justify-center'><span className="loading loading-ring loading-lg mx-auto"></span></div>}
            {  
                lists.map(list => {
                    return <div key={list._id} className="flex flex-col gap-6 mb-5 mx-5 md:mx-12 lg:mx-20 border p-5 rounded-lg  lg:flex-row">
                                <img src={list.image} alt="" className="w-full h-[150px] object-cover rounded-lg md:h-[300px] lg:w-[300px] lg:h-[150px]"/>
                                <div className="flex flex-col flex-1 space-y-5">
                                    <div className="flex justify-between">
                                        <h3 className="text-xl font-semibold md:text-2xl lg:text-2xl">{list.itemName}</h3>
                                        <p className="font-medium bg-[#A1BE95] p-2 rounded-md text-white text-sm">{list.stockcheck}</p>
                                    </div>
                                    <div className="flex justify-between text-base font-semibold">
                                        <p>Price  ${list.price}.00</p>
                                        <p>Rating  {list.rating}</p>
                                        <p>Customizable {list.agreement}</p>
                                    </div>
                                    <div className="flex gap-10">
                                        <Link to={`/update/${list._id}`}><button className= 'text-white font-semibold text-base bg-[#A1BE95] px-6 py-3 rounded-full'>Update</button></Link>
                                        <button onClick={() => handleDelete(list._id)} className= 'text-white font-semibold text-base bg-[#F52449] px-6 py-3 rounded-full'>Delete</button>
                                    </div>
                                </div>
                           </div>
                })
            }
        </div>
    );
};

export default MyList;