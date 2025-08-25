import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const Cards = ({ product }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={product.img} />}
  >
    <Meta title={product.name} description="www.instagram.com" />
  </Card>
);
export default Cards;