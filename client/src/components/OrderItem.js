import React from 'react';
import styled from 'styled-components';

const OrderRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const OrderCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

function OrderItem({ order, onStatusChange }) {
  return (
    <OrderRow>
      <OrderCell>{order.id}</OrderCell>
      <OrderCell>{order.customer}</OrderCell>
      <OrderCell>{order.date}</OrderCell>
      <OrderCell>{order.status}</OrderCell>
      <OrderCell>${order.total}</OrderCell>
      <OrderCell>
        <select 
          value={order.status}
          onChange={(e) => onStatusChange(order.id, e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </OrderCell>
    </OrderRow>
  );
}

export default OrderItem;

