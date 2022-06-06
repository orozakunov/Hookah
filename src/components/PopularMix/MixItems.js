import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { FiHeart } from 'react-icons/fi';


const MixItems = () => {
    const [mix, setMix] = useState([])

    useEffect(() => {
      const fetchTodos = async () => {
        const response = await fetch(
            'http://localhost:3500/popularMix'
        )
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
        const responseData = await response.json()
        //   console.log(responseData)
  
        const loadedMeals = []

        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            title: responseData[key].title,
            img: responseData[key].img,
            percents: responseData[key].compound[0].percents,
            name: responseData[key].compound[0].title

          })
        }
        setMix(loadedMeals)
      }
      fetchTodos().catch((error) => {
        console.log(error.message)
      })
    }, [])

    const renderItems = mix.map((item) => {
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
                  <p>{item.percents}  <span>{item.name}</span></p>
              </div>
          </div>
        );
    })
  return (
      <div className='mixItems-content'>{renderItems}</div>
  )
}

export default MixItems;