import React from 'react';
import FooterItems from './FooterItems';
import TelegramIcon from '../UI/Icons/TelegramIcon';

import './style.css';

const Footer = () => {

    const footerItems = [
        {
          id: 1,
          description: "Табаки",
        },
        {
          id: 2,
          description: "Миксы",
        },
        {
          id: 3,
          description: "Лаунжи",
        },
        {
          id: 4,
          description: "Магазин",
        },
        {
          id: 5,
          description: "Карта",
        },
      ];

  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer-content'>
                <FooterItems footerItems={footerItems} />
                <div className='footer-telegram-link'>
                  <TelegramIcon />
                  <a href='/'>  Мы в Telegram</a>
                </div>
            </div>
            <div className='footer-content'>
                    <p className='footer-content-text'>© 2021 HookahPortal.ru</p>
                <div></div>
                <div className='footer-config'>
                  <ul>
                    <li>Политика конфиденциальности</li>
                    <li>Обработка данных</li>
                  </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;