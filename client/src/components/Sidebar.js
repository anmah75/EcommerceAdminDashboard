import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home, Package, Inbox, MessageSquare, ShoppingBag, Database } from 'lucide-react';

const SidebarContainer = styled.nav`
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
  height: 100vh;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #e9ecef;
  }

  &.active {
    background-color: #007bff;
    color: white;
  }

  svg {
    margin-right: 10px;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarLink to="/" end>
        <Home size={18} />
        Dashboard
      </SidebarLink>
      <SidebarLink to="/products">
        <Package size={18} />
        Products
      </SidebarLink>
      <SidebarLink to="/inbox">
        <Inbox size={18} />
        Inbox
      </SidebarLink>
      <SidebarLink to="/chat">
        <MessageSquare size={18} />
        Chat
      </SidebarLink>
      <SidebarLink to="/orders">
        <ShoppingBag size={18} />
        Order List
      </SidebarLink>
      <SidebarLink to="/stock">
        <Database size={18} />
        Product Stock
      </SidebarLink>
    </SidebarContainer>
  );
}

export default Sidebar;

