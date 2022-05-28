import React from "react";

const Items = ({ headerItems }) => {
  const renderedItems = headerItems.map((item) => {
    return (
      <div key={item.id} className="headerItem">
        <ul>
          <li>{item.description}</li>
        </ul>
      </div>
    );
  });

  return <div className="headerItems">{renderedItems}</div>;
};

export default Items;
