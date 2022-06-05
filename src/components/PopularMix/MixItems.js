import React from 'react';
import { IconContext } from 'react-icons';
import { FiHeart } from 'react-icons/fi';


const MixItems = ({ items }) => {
    const renderItems = items.map((item) => {
        return (
        <div className='mixItems-item' key={item.id}>
            <div className='mixItem-item-first'>
              <div className='mixItems-icon-param'>
                  <IconContext.Provider value={{ 
                      color: "#A1C4FD", 
                      size: "30px",
                      style: {
                          position: 'absolute',
                          right: 0,
                          top: '20px',
                          cursor: 'pointer'
                      }
                    }}
                  >
                      <FiHeart />
                  </IconContext.Provider>
                  <img className='mix-items-img' src={item.img} alt="" />
              </div>
              <div className='mixItems-news'>
                  <span>НОВИНКА</span>
              </div>
              <p className='mixItem-text'>{item.title}</p>
              </div>
              <div className='mixItem-percents'>
                  <p>{item.compound[0].percents}  <span>{item.compound[0].title}</span></p>
                  <p>{item.compound[1].percents}  <span>{item.compound[1].title}</span></p>
                  <p>{item.compound[2].percents}  <span>{item.compound[2].title}</span></p>
                  <p>{item.compound[3].percents}  <span>{item.compound[3].title}</span></p>
                  <p>{item.compound[4].percents}  <span>{item.compound[4].title}</span></p>
              </div>
          </div>
        );
    })
  return (
      <div className='mixItems-content'>{renderItems}</div>
  )
}

export default MixItems;