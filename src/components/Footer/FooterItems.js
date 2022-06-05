import React from 'react'

const FooterItems = ({ footerItems }) => {
    const renderFooterItems = footerItems.map((item) => {
        return (
            <div className='footerItem' key={item.id}>
                <ul>
                    <li>{item.description}</li>
                </ul>
            </div>
        )
    })
  return <div className='footerItems' >{renderFooterItems}</div>
}

export default FooterItems;