import React from "react";

const Items = ({ headerItems }) => {
  const renderedItems = headerItems.map((item) => {
    return (
      <div className="headerItem" key={item.id}>
        <ul>
          <li>{item.description}</li>
        </ul>
      </div>
    );
  });

  return <div className="headerItems">{renderedItems}</div>;
};

export default Items;
