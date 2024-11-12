import React from 'react'
import { useState } from 'react';

 const Header = () => {
  const [counter, setCounter] = useState(0);

  // function to increase count
  const increase = () => {
    setCounter((prev) => prev + 1 );
  };
  
  // function to decrease count 
  const decrease = () => {
    setCounter((prev) => prev - 1);
  };
  
  
  return (
    <div>
        <h1 className = "Main-h1">The Cookie Jar</h1> 
        <p className = "description"> &#10084; where cookie lovers unite! &#127850;</p>
       <div class="state"> 
        <p> Vistors: {counter} </p>
        <button className='button' onClick={increase}> Visited</button>
        <button className='button' onClick={decrease}> Non-visited </button>
        </div>

        <img className = "My-shop-image" src = "/My-shop-storefront.webp" alt = "My Shop"/>
    </div>
  )
}
export default Header;
