import { useEffect, useState } from "react";
import items from "../../data/products";  

const NewArrivals = () => {
  const [ filteredItems, setFilteredItems ] = useState([]);

  const filterItemsByCategory = (category) =>{
      const filtered = items.filter(function(item){
          return item.category === category;
      }).slice(0,5);

      console.log(filtered);
      setFilteredItems(filtered);
  };

  useEffect(()=>{
      
  }, []);

  return (
    <div>
        <h1>Shop All Latest Offers</h1>
        <h3>View All Offers</h3>

        <ul>
            <li onClick={()=> filterItemsByCategory('shirt') }>Shirt</li>
            <li onClick={()=> filterItemsByCategory('t-shirt') }>T-Shirt</li>
        </ul>

        { filteredItems.map((item, index)=>(
          <div key={item.id} className={index === 0 ? 'text-2xl font-bold mb-4' : 'mb-4'}>
              {/* Apply bigger style to the first product */}
              <h1>{item.name}</h1>
              <p>${item.price}</p>
          </div>
        
        ))}
    </div>
  )
}

export default NewArrivals