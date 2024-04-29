import banner1 from '../public/slide1_banner1.jpg'
import banner2 from '../public/slide1_banner2.jpg'
import { useEffect, useState } from 'react';
import './App.css'
import Craftcards from './Components/Craftcards';
import Slider from './Components/Slider';
import Testimonial from './Components/Testimonial';
import tick from '../public/check-symbol.png'
import decor from '../public/pexels-pixabay-462235.jpg';


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
},[]);



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
        {/* Testimonial */}
        <div>
          <h3 className='text-center text-4xl mt-12 mb-4 font-bold'>TESTIMONIALS</h3>
          <p className='text-base text-center text-[#A8A8A8]'>What our customers are saying about us</p>
          <Testimonial></Testimonial>
        </div>
        {/* random */}
        <div className='flex flex-col gap-8  mt-12 mx-5 md:mx-12 md:flex-row lg:mx-20 lg:flex-row'>
            <img src={decor} alt="" className="w-full h-[475px] object-fill md:w-1/2 lg:w-1/2"/>
          <div className='flex-1'>
            <div className='space-y-5 '>
              <div className="flex items-center gap-3">
              <hr className='w-16 border-2'/>
              <h5 className='text-[#CE2A2A] font-base'>Upgrade Your Decor</h5>
              </div>
              <h3 className='font-bold text-4xl'>New Day New Way & New Style</h3>
              <p className='text-[#6E6E6E] font-normal'>New Day New Decor is a fresh approach to home styling, offering daily inspiration and curated collections to elevate your living spaces. With a focus on versatility and affordability, we believe that each day presents an opportunity to refresh your decor and express your unique style. From trendy accents to timeless classics, our carefully selected pieces cater to every taste and budget, ensuring that your home reflects the latest trends while remaining true to your personal aesthetic. </p>
              <ul className='font-medium text-base '>
                <li className='flex gap-4 items-center'><img src={tick} alt="" className='h-6 w-6'/> Original Brand</li>
                <li className='flex gap-4 items-center'><img src={tick} alt="" className='h-6 w-6'/>High Quality</li>
                <li className='flex gap-4 items-center'><img src={tick} alt="" className='h-6 w-6'/>Trendy Style</li>
                <li className='flex gap-4 items-center'><img src={tick} alt="" className='h-6 w-6'/>Saving Money</li>
              </ul>
              <button className='text-white font-semibold text-base py-2 px-4 bg-[#F52449] md:px-6 md:py-3  lg:px-6 lg:py-3 rounded-full'>View Collection</button>
            </div>
          </div>
        
        </div>
    </div>
  )
}

export default App
