import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const Cards = ({ product }) => (
  <Card
    hoverable
    
    cover={<img alt="example" src={product.img} />}
  >
    <div className='flex items-center gap-2'>
       <Meta title={product.name} description="www.instagram.com" />
       <button className='bg-blue-500 text-white py-1 px-2 rounded'>  Add to Cart</button>
    </div>
  </Card>
);
export default Cards;