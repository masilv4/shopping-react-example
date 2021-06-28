import ProductCard from "../ProductCard";

import './styles.css';

const ProductList = ({ products }) => {
  return (
    <div className="products-list">
      {products && products.map(({ title, price, description, image }) => (
        <ProductCard title={title} price={price} description={description} image={image} />
      ))}
    </div>
  );
}

export default ProductList;