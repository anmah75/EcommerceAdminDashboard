import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  margin: 0 0 10px 0;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin: 0 0 10px 0;
`;

function ProductCard({ product, onEdit }) {
  return (
    <Card>
      <ProductImage src={product.thumbnail} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <button onClick={() => onEdit(product)}>Edit</button>
    </Card>
  );
}

export default ProductCard;

