import './styles.css';

const Header = ({ logoName }) => {
  return (
    <header className="main-header">
      <div className="wrapper">
        <a href="#"><h1>{logoName}</h1></a>
        <a href="#"><i class="fas fa-cart-plus"></i></a>
      </div>
    </header>
  )
}

export default Header;