import './App.css';
import products from './products';

function App() {
  const productsList = products.map((product) => (

  <div className="div that has all the products in the products.js">
  <img className="cookie-image" src={product.image} alt="cookies-image"/>
  <p className="description-product1"> {product.name} </p>
  <p className="description-product2"> {`${product.price} KD`} </p>

  </div>
));
  
  return (
    <div className="App">
      <h1 className = "Main-h1">The Cookie Jar</h1> 
      <p className = "description"> &#10084; where cookie lovers unite! &#127850;</p>
      <img className = "My-shop-image" src = "/My-shop-storefront.webp" alt = "My Shop"/>


      <div class="My-product">
        {productsList}
      </div>
      
    </div>
  );

}


export default App;
