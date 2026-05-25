import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function Home() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>

      <p>Beautiful plants for your home</p>

      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutUs />
            </>
          }
        />

        <Route
          path="/products"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<CartItem />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
