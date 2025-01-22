import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';
import { updateProduct } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
`;

function Products() {
  const { products, loading, error } = useContext(AppContext);
  const [editingProduct, setEditingProduct] = useState(null);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(editingProduct.id, editingProduct);
      setEditingProduct(null);
      // You might want to refresh the products list here
    } catch (err) {
      console.error('Failed to update product:', err);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onEdit={handleEdit} />
        ))}
      </ProductGrid>
      {editingProduct && (
        <EditForm onSubmit={handleSave}>
          <h3>Edit Product</h3>
          <input
            value={editingProduct.title}
            onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
            placeholder="Product Title"
          />
          <input
            type="number"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })}
            placeholder="Price"
          />
          <button type="submit">Save</button>
        </EditForm>
      )}
    </div>
  );
}

export default Products;

