import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const Cards = ({ product }) => (
  <Card
    hoverable
    
    cover={<img className='h-80 object-cover' alt="example" src={product.img} />}
  >
    <div className='flex justify-between items-center gap-2'>
       <Meta title={product.name} description={`Price: $${product.price}`} />
       <button className='bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-blue-600'>  Add to Cart</button>
    </div>
  </Card>
);
export default Cards;