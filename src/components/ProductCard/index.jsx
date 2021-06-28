import './styles.css';

const ProductCard = ({ title, price, description, image }) => {
  return (
    <div class="content">
      <img src={image} alt="Teste" />
      <h3>{title}</h3>
      <p>{description}</p>
      <h6>${price}</h6>
      <ul>
        <li><i class="fa fa-star" aria-hidden="true"></i></li>
        <li><i class="fa fa-star" aria-hidden="true"></i></li>
        <li><i class="fa fa-star" aria-hidden="true"></i></li>
        <li><i class="fa fa-star" aria-hidden="true"></i></li>
        <li><i class="fa fa-star" aria-hidden="true"></i></li>
      </ul>
      <button class="buy-1">Buy Now</button>
    </div> 
  )
}

export default ProductCard;