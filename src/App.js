import './App.css';
import products from './products';
function App() {
  return (
    <div className="App">
      <h1 class = "Main-h1">The Cookie Jar</h1> 
      <p class = "description"> &#10084; where cookie lovers unite! &#127850;</p>
      <img class = "My-shop-image" src = "/My-shop-storefront.webp" alt = "My Shop"/>
      
      
        
        <div class="My-product">
          {products.map((product) =>

          <div class="div that has all the products in the products.js">
          <img class="cookie-image" src={product.image} alt="cookies-image"/>
          <p class="description-product1"> {product.name} </p>
          <p class="description-product2"> {`${product.price} KD`} </p>

          </div>
)}
        </div>





      



    </div>
  );
}

export default App;
