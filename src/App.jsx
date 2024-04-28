
import { useEffect, useState } from 'react';
import './App.css'
import Craftcards from './Components/Craftcards';

function App() {
  const [items,setItems] = useState([]);
  useEffect(() => {
    fetch('https://art-craft-store-server-zeta.vercel.app/crafts')
    .then(res => res.json())
    .then(data => setItems(data));
},[])

  return (
    <div className='mx-5 md:mx-12 lg:mx-20'>
      {/* crafts card */}
        <div>
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
