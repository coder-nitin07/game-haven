import { useEffect, useState } from 'react';
import productsData from '../../data/data';

const NewArrivals = () => {
  const [ filterItems, setFilterItems ] = useState([]);

  const filteredItemsByCategory = (category)=>{
      const getItems = productsData.filter((item)=>{
          return item.category === category;
      }).slice(0,5);
      console.log(getItems)
      setFilterItems(getItems);

      if(category === 'For You'){
            function getRandomItems(arr, numItems = 5) {
                const shuffled = arr.sort(() => Math.random() - 0.5);
                return shuffled.slice(0, numItems);
            }
            const data = getRandomItems(productsData, 5);
            setFilterItems(data);
      }
  };

  useEffect(()=>{
    filteredItemsByCategory('For You')
  }, [ ]);

  return (
    <div className='shop-section bg-white p-3 px-8 text-center'>
        <h1 className='text-4xl font-bold p-2'>Shop All Latest Offers</h1>
        <h3 className='text-2xl font-lightbold underline pb-5'>View All Offers</h3>

        <ul className='flex justify-center gap-4 font-medium pb-5 cursor-pointer'>
          <li onClick={()=>{ filteredItemsByCategory('For You') }}>For You</li>
          <li onClick={()=>{ filteredItemsByCategory('GamePads') }}>GamePads</li>
          <li onClick={()=>{ filteredItemsByCategory('Gaming Chairs') }}>GamingChairs</li>
          <li onClick={()=>{ filteredItemsByCategory('Gaming Monitors') }}>GamingMonitors</li>
        </ul>

        <div className="items-container">
            {
              filterItems[0] && (
                  <div className='left-container'>
                      <img src={ filterItems[0].image } alt="" />
                      <h1 className='text-2xl font-semibold'>{ filterItems[0].name }</h1>
                      <p>{ filterItems[0].price }</p>
                      
                  </div>
              ) 
            }

            <div className="right-container">
                {
                  filterItems.slice(1).map((item, index)=>{
                    return <div key={ index } className='items'>
                        <img src={ item.image } alt="" />
                        <h1 className='font-bold'>{ item.name }</h1>
                        <p>{ item.price }</p>
                    </div>
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default NewArrivals