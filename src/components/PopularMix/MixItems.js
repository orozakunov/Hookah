import React from 'react';
import { FiHeart } from 'react-icons/fi';
import DrinkImg from '../../assets/PoppularMix/Group 18 (1).png';


const MixItems = () => {
  return (
      <div className='mixItems-content'>
    <div className='mixItems-item'>
        <FiHeart />
        <img className='mix-items-img' src={DrinkImg} alt="" />
        <div className='mixItems-news'>
            <span>Новинка</span>
        </div>
        <p className='mixItem-text'>Идеальный завтрак</p>
        <hr />
    </div>
    <div className='mixItems-item'>
        <img className='mix-items-img' src={DrinkImg} alt="" />
        <p className='mixItem-text'>Идеальный завтрак</p>
    </div>
    <div className='mixItems-item'>
        <img className='mix-items-img' src={DrinkImg} alt="" />
        <p className='mixItem-text'>Идеальный завтрак</p>
    </div>
      </div>
  )
}

export default MixItems;