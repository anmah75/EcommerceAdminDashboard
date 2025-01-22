import React, { createContext, useState, useEffect } from 'react';
import { fetchProducts, fetchUsers } from '../services/api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, usersData] = await Promise.all([
          fetchProducts(),
          fetchUsers()
        ]);
        setProducts(productsData);
        setUsers(usersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <AppContext.Provider value={{ products, users, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

