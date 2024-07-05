import './ProductList.css';

import React from 'react';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default.tsx';


  const ProductList = () => {
    const productData = []

    for (let i = 1; i <= 22; i++) {
        productData.push({
                index: i,
                imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
                subtitle: 'BBQ', 
                title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', 
                amount: 29000
            });
        }


    return (
        <div className='product-container'>
            <div className="product-list">
                {productData.map((item) => (
                        <DefaultGoodsItems
                        index={item.index}
                        imageSrc={item.imageSrc}
                        subtitle={item.subtitle}
                        title={item.title}
                        amount={item.amount}
                        />
                ))}
            </div>
        </div>
    );
  };

  export default ProductList;