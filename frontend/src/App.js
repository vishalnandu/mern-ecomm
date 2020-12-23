import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
        <div className="grid-container">
            <header className="row">
              <div >
                <a className="brand" href="/" >Ecommerce</a>
              </div>
              <div>
                <a href="/" >Home</a>
                <a href="about.html" >About</a>
                <a href="cart.html" >Cart</a>
                <a href="login.html" >Login</a>
              </div>
            </header>
            <main>
              <Route path="/" component={HomeScreen} exact></Route>
              <Route path="/product/:id" component={ProductScreen}></Route>                
            </main>
            <footer className="row center">
                All Rights Reserved 
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
