import banner1 from '../public/slide1_banner1.jpg'
import banner2 from '../public/slide1_banner2.jpg'
import { useEffect, useState } from 'react';
import './App.css'
import Craftcards from './Components/Craftcards';
import Slider from './Components/Slider';

function App() {
  const [items,setItems] = useState([]);
  useEffect(() => {
    fetch('https://art-craft-store-server-zeta.vercel.app/crafts')
    .then(res => res.json())
    .then(data => setItems(data));
},[])


  return (
    <div >
      {/* slider banner */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 mb-12">
          <Slider></Slider>
          </div>
          <div>
            <img src={banner1} alt="" className='h-[315px] w-full object-cover mb-6'/>
            <img src={banner2} alt="" className='h-[315px] w-full object-cover'/>
          </div>
      </div>
      {/* crafts card */}
        <div className='mx-5 md:mx-12 lg:mx-20'>
          <h2 className='text-center font-bold text-4xl mb-8'>Craft Items</h2>
          <div className='grid gap-6 grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
            {
              items.map(item => {
                return <Craftcards key={item._id} items={items} item={item}></Craftcards>
              }).slice(0,6)
            }
          </div>
        </div>
        
    </div>
  )
}

export default App
