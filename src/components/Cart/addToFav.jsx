import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./addToFav.css";
import { toggleCart } from "../../store/slices/favoritesSlice";

function AddToFav() {
  const dispatch = useDispatch();

  const { isCartOpen, cartItems } = useSelector((state) => state.cart);
  const [isAdded, setIsAdded] = useState(false);

  const handleCloseCart = (open) => {
    dispatch(toggleCart(open));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  useEffect(() => {
    const docBody = document.body;

    isCartOpen
      ? docBody.classList.add("overflow_hide")
      : docBody.classList.remove("overflow_hide");
  }, [isCartOpen]);

  const cartQuantity = cartItems.length;

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const handleAddToCart = () => {
    //const item = { ...props };
    dispatch(addItem(id));

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  return (
    <div>
      {isCartOpen && (
        <div id="cart">
          <div className="cart_content">
            <div className="cart_head">
              <h3>
                Seçilmişlər <small>({cartQuantity})</small>
              </h3>
              <div
                title="Close"
                className="close_btn"
                onClick={() => handleCloseCart(false)}
              >
                <span>&times;</span>
              </div>
            </div>

            <div className="cart_body">
              {cartQuantity === 0 ? (
                <h3>Səbət boşdur</h3>
              ) : (
                cartItems.map((item) => {
                  const { id, imageUrl, title, price, quantity } = item;
                  console.log(item);
                  const itemTotal = price * quantity;

                  return (
                    <div className="cart_items" key={id}>
                      <figure className="cart_items_img">
                        {/* <img src={imageUrl[0].url} alt="product-img" /> */}
                      </figure>

                      <div className="cart_items_info">
                        <h4>{title}</h4>
                        {/* <h3 className="price">{price} m</h3> */}
                      </div>

                      <div className="cart_items_quantity">
                        <span onClick={() => handleDecrement(id)}>&#8722;</span>
                        {/* <b>{quantity}</b> */}
                        <span onClick={() => handleIncrement(id)}>&#43;</span>
                      </div>

                      <div
                        title="Remove Item"
                        className="cart_items_delete"
                        onClick={() => handleRemove(id)}
                      >
                        <span>&times;</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="cart_foot">
              <h3>
                <small>Ümumi :</small>
                {/* <b>{cartTotal.toLocaleString()} m</b> */}m
              </h3>

              {/* dont open <button
                type="button"
                className="checkout_btn"
                disabled={cartQuantity === 0}
              >
                Checkout
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToFav;
