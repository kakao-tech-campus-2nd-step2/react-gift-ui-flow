import React from 'react';

import { giftItems } from '../../data/giftItems';

export const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      <div className="items">
        {giftItems.map((item) => (
          <div key={item.id} className="item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-info">
              <p className="item-name">{item.name}</p>
              <p className="item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
