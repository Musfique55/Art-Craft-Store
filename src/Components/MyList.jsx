import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
    const {user,loader} = useContext(AuthContext) || {};
    const [lists,setLists] = useState([]);

    
    useEffect(() => {
        if(loader && !user){
            <span className="loading loading-dots loading-lg"></span>
        } else{
            fetch(`https://art-craft-store-server-zeta.vercel.app/craft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLists(data);
            })
            
        }
        },[user,loader])
     
    const handleDelete = (id) => {
        fetch(`https://art-craft-store-server-zeta.vercel.app/crafts/${id}`,{
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
                if(data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    const remaining = lists.filter(list => list.id !== id);
                    setLists(remaining);
                }
                }
              })
        })
    }
    // const handleFilter = (e) => {
    //     const agreement = e.target.value;
    //     setFilter(agreement);
    //     const filterable = lists.sort((prev,curr) => {
    //         const filtered = prev.agreement - curr.agreement;
    //         setLists(filtered)
    //     })
    //     console.log(filterable);
    // }
    
    // console.log(filter);
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-10">My Art & Craft List</h2>
            <form className="mx-auto text-center mb-10">
            <label>Customizable</label>
                <select id="agreement" name="agreement">
                    <option value="Yes">Yes</option>
                    <option value="No" defaultChecked>No</option>
                </select>
            </form>
            {  
                lists.map(list => {
                    return <div key={list._id} className="flex gap-6 mb-5 mx-5 md:mx-12 lg:mx-20">
                                <img src={list.image} alt="" className="w-[200px] h-[150px] object-cover rounded-lg"/>
                                <div className="flex flex-col flex-1 space-y-5">
                                    <div className="flex justify-between">
                                        <h3 className="text-2xl font-semibold">{list.itemName}</h3>
                                        <p className="font-medium bg-[#A1BE95] p-2 rounded-md text-white text-sm">{list.stockcheck}</p>
                                    </div>
                                    <div className="flex justify-between font-semibold">
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