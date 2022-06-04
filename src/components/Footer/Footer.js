import React from 'react';
import FooterItems from './FooterItems';

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
                <p>Мы в Telegram</p>
            </div>
            <div className='footer-content'>
                    <p>© 2021 HookahPortal.ru</p>
                <div></div>
                <div>
                    <p>Политика конфиденциальности</p>
                    <p>Обработка данных</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;