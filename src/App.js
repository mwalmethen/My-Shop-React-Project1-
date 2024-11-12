import './App.css';
import ProductList from './Components/ProductList';

function App() {

  
  return (
    <div className="App">
      <h1 className = "Main-h1">The Cookie Jar</h1> 
      <p className = "description"> &#10084; where cookie lovers unite! &#127850;</p>
      <img className = "My-shop-image" src = "/My-shop-storefront.webp" alt = "My Shop"/>

      <div>
        <ProductList/>
    </div>
      
    </div>
  );

}


export default App;
