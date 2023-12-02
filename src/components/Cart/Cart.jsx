import { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import db from "../../../public/db.json";
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleCart } from "../../store/slices/favoritesSlice";
import AddToFav from "./addToFav";

function Cart() {
  const [heartActive, setHeartActive] = useState(false);

  const { cartItems, heartFull } = useSelector((state) => state.cart);
  console.log(cartItems);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const cartQuantity = cartItems.length;

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  function changeHeart(id) {
    setHeartActive(!heartActive);
  }

  const handleAddToCart = (id) => {
    dispatch(addItem(id));
    //setHeartActive(!heartActive);

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  return (
    <div>
      {/* new */}
      <div className="navbar icon-fav-footer-hidden">
        <div></div>
        <div className="nav_menu">
          <div
            title="Cart"
            className="cart_icon"
            onClick={() => handleOpenCart(true)}
          >
            <span className="badge">{cartQuantity}</span>
          </div>
        </div>
      </div>
      <AddToFav />
      {/* end new */}

      <div className="container">
        <div className="row">
          {db.products.map((prod) => (
            <div className="col-lg-3 col-md-6 col-6 main-card">
              <i
                onClick={() => handleAddToCart(prod)}
                className={
                  heartFull
                    ? "fa-solid fa-heart card-heart"
                    : "fa-regular fa-heart card-heart"
                }
              ></i>
              <Link
                to={`/product/${prod.id}`}
                style={{ textDecoration: "none", color: "darkslategray" }}
              >
                <section className="blog-card">
                  <div className="card-img">
                    <Carousel>
                      {prod.imageUrl.map((i) => (
                        <Carousel.Item>
                          <img src={i.url} alt="Product image" />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <i
                      className={prod.vip ? "fa-solid fa-crown card-crown" : ""}
                    ></i>
                    <p className="price">{prod.price} m</p>
                  </div>
                  <div className="blog-content">
                    <p className="blog-label me-1">{prod.category}</p>
                    <h4>{prod.title}</h4>
                    <p>
                      {prod.description.length > 25
                        ? `${prod.description.substring(0, 25)}...`
                        : prod.description}
                    </p>
                    <div className="author row">
                      <div className="d-flex justify-content-between">
                        <p className="time">{prod.city}</p>
                        <p className="time">{prod.date}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
