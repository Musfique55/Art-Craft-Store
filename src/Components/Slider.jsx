
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {useTypewriter, Cursor  } from 'react-simple-typewriter';
const Slider = () => {
    const [text] = useTypewriter({
        words : ['Vases','Utensils','Home Decor','Jewellery'] ,
        loop : 0
    });
    return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide id='slider1' className='flex flex-col items-start justify-start'>
                <h2 className='font-semibold text-3xl mb-5'>Wooden <span style={{fontWeight : 'bold', color : 'black'}}>{text}</span><span><Cursor /></span></h2>                
                <p className='font-medium text-xl mb-5'>High quality 3d models set of wooden vases</p>
                <button className='bg-black px-6 py-3 text-white text-base'>See More</button>
        </SwiperSlide>
        <SwiperSlide id='slider2'>
        <h2 className='font-semibold text-3xl mb-5'>Wooden <span style={{fontWeight : 'bold', color : 'black'}}>{text}</span><span><Cursor /></span></h2>    
                <p className='font-medium text-xl mb-5'>Table ornament/Living room art decor</p>
                <button className='bg-black px-6 py-3 text-white text-base'>See More</button>
        </SwiperSlide>
        <SwiperSlide id='slider3'>
        <h2 className='font-semibold text-3xl mb-5'>Wooden <span style={{fontWeight : 'bold', color : 'black'}}>{text}</span><span><Cursor /></span></h2>    
                <p className='font-medium text-xl mb-5'>High quality 3d models set of wooden utensils</p>
                <button className='bg-black px-6 py-3 text-white text-base'>See More</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};


export default Slider;