import { useEffect, useState } from 'react';

import Header from './components/Header';
import ProductList from './components/ProductsList';

import api from './services/api';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data: products } = await api.get('/products');
      setProducts(products);
    };

    fetchProducts();
  }, [])
  
  return (
    <>
      <Header logoName="Shopping" />
      <ProductList products={products} />
    </>
  );
}

export default App;
