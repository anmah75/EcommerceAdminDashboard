import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';
import { deleteProduct } from '../services/api';
import Loading from '../components/Loading';

const StockTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StockRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const StockCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const ActionButton = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  background-color: ${props => props.delete ? '#dc3545' : '#28a745'};
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

function ProductStock() {
  const { products, loading, error } = useContext(AppContext);
  const [stock, setStock] = useState(products.map(p => ({ ...p, stock: Math.floor(Math.random() * 100) })));

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setStock(stock.filter(item => item.id !== id));
    } catch (err) {
      console.error('Failed to delete product:', err);
    }
  };

  const handleRestock = (id, amount) => {
    setStock(stock.map(item => 
      item.id === id ? { ...item, stock: item.stock + amount } : item
    ));
  };

  return (
    <div>
      <h2>Product Stock</h2>
      <StockTable>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stock.map(item => (
            <StockRow key={item.id}>
              <StockCell>{item.id}</StockCell>
              <StockCell>{item.title}</StockCell>
              <StockCell>{item.stock}</StockCell>
              <StockCell>
                <ActionButton delete onClick={() => handleDelete(item.id)}>Delete</ActionButton>
                <ActionButton onClick={() => handleRestock(item.id, 10)}>Restock (+10)</ActionButton>
              </StockCell>
            </StockRow>
          ))}
        </tbody>
      </StockTable>
    </div>
  );
}

export default ProductStock;

