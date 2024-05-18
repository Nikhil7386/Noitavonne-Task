
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Product from './components/Product';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home />
      <About />
      <Product />
      <Contact />
      <Footer /> */}


      {/* React Routing */}

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/product"} element={<Product />} />
          <Route path={"/productdetails/:id"} element={<ProductDetails />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
