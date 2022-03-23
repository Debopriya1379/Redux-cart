import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import CartComponent from './components/CartComponent';
// import Navbar from './components/Navbar';
// import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <ProductListing/> } />
          <Route path='/product/:productId' element={ <ProductDetails/> } />
          <Route path='/cart' element={ <CartComponent/> } />
          {/* <Route element={ <NotFound/> } />           */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
