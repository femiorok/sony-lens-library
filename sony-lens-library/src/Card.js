import React from 'react';
import './Card.css';

const Card = ({ list }) => {
    return (
      <div className="grid justify-items-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {list.map(({ name, image, salePrice, sku, url }) => (
          <div className="bg-gray-400 border-2 border-gray-600 m-4 drop-shadow-lg rounded-lg hover:rounded-3xl hover:bg-gray-200 hover:drop-shadow-2xl
          hover:scale-110 transition ease-in-out delay-75">
          <a className="w-64 flex justify-center p-4" href={ url }><img className="h4" src={image} alt="Lens"></img></a>
          <div className="w-64 p-5 tc leading-relaxed">
          <h2>{ name } </h2>
          <h2>${ salePrice } </h2>
          <h3>SKU: { sku }</h3>
          </div>
          </div>
        ))}
        
      </div>
    )
    
  }


export default Card;