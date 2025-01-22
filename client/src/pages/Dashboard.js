import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';
import Chart from '../components/Chart';
import Loading from '../components/Loading';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const KPICard = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ChartContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function Dashboard() {
  const { products, users, loading, error } = useContext(AppContext);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const totalUsers = users.length;
  const totalProducts = products.length;
  const totalSales = products.reduce((sum, product) => sum + product.price, 0);
  const pendingOrders = 5; // This would typically come from your order data

  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardContainer>
        <KPICard>
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </KPICard>
        <KPICard>
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </KPICard>
        <KPICard>
          <h3>Total Sales</h3>
          <p>${totalSales.toFixed(2)}</p>
        </KPICard>
        <KPICard>
          <h3>Pending Orders</h3>
          <p>{pendingOrders}</p>
          <Link to="/orders?status=pending">View Pending Orders</Link>
        </KPICard>
      </DashboardContainer>
      <ChartContainer>
        <h3>Sales Overview</h3>
        <Chart />
      </ChartContainer>
    </div>
  );
}

export default Dashboard;

