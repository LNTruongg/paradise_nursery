import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 20,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 25,
    category: "Air Purifying",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 18,
    category: "Medicinal",
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 15,
    category: "Decorative",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
  },
  {
    id: 5,
    name: "Cactus",
    price: 12,
    category: "Decorative",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a",
  },
  {
    id: 6,
    name: "Mint Plant",
    price: 10,
    category: "Medicinal",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isAdded = (id) => {
    return cartItems.find((item) => item.id === id);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Plants</Link> |{" "}
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>

      <h1>Paradise Nursery</h1>

      <div className="products">
        {plants.map((plant) => (
          <div className="card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />

            <h3>{plant.name}</h3>

            <p>${plant.price}</p>

            <p>{plant.category}</p>

            <button
              disabled={isAdded(plant.id)}
              onClick={() => dispatch(addItem(plant))}
            >
              {isAdded(plant.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
