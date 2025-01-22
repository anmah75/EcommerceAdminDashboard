import React, { useState } from 'react';
import styled from 'styled-components';
import OrderItem from '../components/OrderItem';

const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 5px;
`;

const mockOrders = [
  { id: 1, customer: 'John Doe', date: '2023-06-01', status: 'Pending', total: 100 },
  { id: 2, customer: 'Jane Smith', date: '2023-06-02', status: 'Shipped', total: 150 },
  { id: 3, customer: 'Bob Johnson', date: '2023-06-03', status: 'Delivered', total: 200 },
];

function OrderList() {
  const [orders, setOrders] = useState(mockOrders);
  const [filter, setFilter] = useState({ type: '', date: '', status: '' });

  const filteredOrders = orders.filter(order => 
    (filter.type === '' || order.customer.toLowerCase().includes(filter.type.toLowerCase())) &&
    (filter.date === '' || order.date === filter.date) &&
    (filter.status === '' || order.status === filter.status)
  );

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div>
      <h2>Order List</h2>
      <FilterContainer>
        <FilterInput 
          type="text" 
          placeholder="Filter by customer" 
          value={filter.type}
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
        />
        <FilterInput 
          type="date" 
          value={filter.date}
          onChange={(e) => setFilter({ ...filter, date: e.target.value })}
        />
        <select 
          value={filter.status}
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </FilterContainer>
      <OrderTable>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <OrderItem key={order.id} order={order} onStatusChange={handleStatusChange} />
          ))}
        </tbody>
      </OrderTable>
    </div>
  );
}

export default OrderList;

