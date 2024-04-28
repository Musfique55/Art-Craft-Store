import banner1 from '../public/slide1_banner1.jpg'
import banner2 from '../public/slide1_banner2.jpg'
import { useEffect, useState } from 'react';
import './App.css'
import Craftcards from './Components/Craftcards';
import Slider from './Components/Slider';
import Testimonial from './Components/Testimonial';

function App() {
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch('https://art-craft-store-server-rose.vercel.app/crafts')
    .then(res => res.json())
    .then(data => {
      setItems(data);
      setLoading(false);
  });
},[])

  return (
    <div >
      
      {/* slider banner */}
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 lg:gap-7">
          <div className="col-span-2 mb-12">
          <Slider></Slider>
          </div>
          <div className='mx-5 md:mx-5 lg:mx-0'>
            <img src={banner1} alt="" className='h-[315px] w-full object-cover mb-6'/>
            <img src={banner2} alt="" className='h-[315px] w-full object-cover'/>
          </div>
      </div>
      {/* crafts card */}
        <div className='mx-5 md:mx-12 lg:mx-20'>
          <h2 className='text-center font-bold text-4xl mb-8 mt-8'>Craft Items</h2>
          {
                 loading && <div className='flex justify-center'><span className="loading loading-ring loading-lg mx-auto"></span></div>
            }
          <div className='grid gap-6 grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
              
            {
              items.map(item => {
                return <Craftcards key={item._id} items={items} item={item}></Craftcards>
              }).slice(0,6)
            }
          </div>
        </div>
        <div>
          <h3 className='text-center text-4xl mt-12 mb-4 font-bold'>TESTIMONIALS</h3>
          <p className='text-base text-center text-[#A8A8A8]'>What our customers are saying about us</p>
          <Testimonial></Testimonial>
        </div>
    </div>
  )
}

export default App
