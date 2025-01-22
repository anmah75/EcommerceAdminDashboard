import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #343a40;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>E-commerce Admin Dashboard</Title>
      <UserInfo>
        <Avatar src="/placeholder.svg?height=32&width=32" alt="User Avatar" />
        <span>Admin User</span>
      </UserInfo>
    </HeaderContainer>
  );
}

export default Header;

