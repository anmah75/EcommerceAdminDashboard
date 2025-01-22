import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Inbox from './pages/Inbox';
import Chat from './pages/Chat';
import OrderList from './pages/OrderList';
import ProductStock from './pages/ProductStock';
import { AppProvider } from './context/AppContext';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

function App() {
  return (
    <AppProvider>
      <Router>
        <AppContainer>
          <Sidebar />
          <div style={{ flexGrow: 1 }}>
            <Header />
            <MainContent>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/orders" element={<OrderList />} />
                <Route path="/stock" element={<ProductStock />} />
              </Routes>
            </MainContent>
          </div>
        </AppContainer>
      </Router>
    </AppProvider>
  );
}

export default App;

