import React from 'react';
import './Card.css';
import 'tachyons';

const Card = ({ list }) => {
    return (
      <div>
        {list.map(({ name, image, salePrice, sku, url }) => (
          <div className="tc f7 lh-title bg-gray dib pa3 ma2 grow bw2 shadow-5 w-10">
          <a href={ url }><img className="h4" src={image} alt="Lens"></img></a>
          <h2>{ name } </h2>
          <h2>{ salePrice } </h2>
          <h3>SKU: { sku }</h3>
          </div>
        ))}
        
      </div>
    )
    
  }


export default Card;