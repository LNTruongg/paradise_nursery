import "./App.css";
import { useState } from "react";

import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";

function App() {
  const [showProductList, setShowProductList] =
    useState(false);

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery</h1>

      <p>
        Beautiful plants for your home and office
      </p>

      <button
        onClick={() =>
          setShowProductList(true)
        }
      >
        Get Started
      </button>

      <AboutUs />
    </div>
  );
}

export default App;
