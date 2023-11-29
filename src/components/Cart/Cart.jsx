import { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import db from "../../../public/db.json";

function Cart() {
  const [heartActive, setHeartActive] = useState(false);
  const [crown, setCrown] = useState(true);

  console.log(db);

  function changeHeart() {
    setHeartActive(!heartActive);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {db.products.map((prod) => (
            <div className="col-lg-3 col-md-6 col-6">
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
                    <i
                      onClick={() => changeHeart()}
                      className={
                        heartActive
                          ? "fa-solid fa-heart card-heart"
                          : "fa-regular fa-heart card-heart"
                      }
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
