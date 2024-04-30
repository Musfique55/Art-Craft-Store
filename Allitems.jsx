import Craftcards from "./src/Components/Craftcards";
import { useEffect, useState } from "react";

const Allitems = () => {
    const [isLoading,setLoading] = useState(true);
    const [items,setItems] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch('https://art-craft-store-server-rose.vercel.app/crafts')
        .then((res) => res.json())
        .then(data => {
            setLoading(false);
            setItems(data);
        })
    }, [])
    return (
        <div>
            <h3 className="text-center font-bold text-4xl">All Products</h3>
            {isLoading && <div className='flex justify-center items-center'><span className="loading loading-ring loading-lg mx-auto"></span></div>}
            <div className="grid grid-cols-1 mx-5 mt-12 gap-6 md:grid-cols-2 md:mx-12 lg:grid-cols-3 lg:mx-20">
                {
                    items.map(item => {
                        return <Craftcards key={item._id} item={item}></Craftcards>
                    })
                }
            </div>
        </div>
    );
};

export default Allitems;