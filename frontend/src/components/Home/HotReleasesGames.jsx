import { useEffect, useState } from 'react';
import { imageGame } from '../../data/products';

const HotReleasesGames = () => {
  const [ cards, setCards ] = useState([]);
  const  [selectedButton, setSelectedButton ] = useState(null);

  const handleButtonClick = (buttonId) => {
      setSelectedButton(buttonId);
  };

  const sort = (data)=>{
      const cards = imageGame.filter((item)=>{
          console.log("data is", data, item)
          return item.category === data
      })
      console.log("cards are", cards)
      setCards(cards);
  }

  useEffect(()=>{
      sort('new-release')
      handleButtonClick('button1')
    }, [ ]);

  return (
    <div className="card-container">
      <h2 className='card-heading'>Great PS4 & PS5 games out now or coming soon</h2>
      
      <div className="btn">
      <button
                className={`button ${selectedButton === 'button1' ? 'selected' : ''}`}
                onClick={() => { handleButtonClick('button1'), sort('new-release') }}
            >
                New releases
            </button>
            <button
                className={`button ${selectedButton === 'button2' ? 'selected' : ''}`}
                onClick={() => { handleButtonClick('button2'), sort('upcoming') }}
            >
                Coming soon
            </button>
      </div>

      <div className="cards">
            {
                  cards.map((item, index)=>{
                    return <div key={ index } className='items' >
                        <img src={ item.img } alt="" />
                        <p className='font-semibold'>{ item.name }</p>
                    </div>
                  })
              }
      </div>
    </div>
  );
};

export default HotReleasesGames;