import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const totalAmount = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total: ${totalAmount}</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            width="120"
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>
            Total: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>

      <br />

      <Link to="/products">
        Continue Shopping
      </Link>
    </div>
  );
}

export default CartItem;
