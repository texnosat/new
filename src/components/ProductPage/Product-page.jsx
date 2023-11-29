import { useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import db from "../../../public/db.json";
import { Carousel } from "react-bootstrap";

function ProductPage() {
  const param = useParams();
  const [showNumber, setShowNumber] = useState(false);
  const [showNumberTitle, setShowNumberTitle] = useState(!false);

  function show() {
    setShowNumber(!showNumber);
  }

  console.log("db");
  console.log(db.products[param.id]);
  let product = db.products[param.id];

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6 col-12">
            <Carousel>
              {product.imageUrl.map((img) => (
                <Carousel.Item key={img.id}>
                  <img
                    className="d-block w-100"
                    height="400px"
                    src={img.url}
                    alt="Product image"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="col-lg-6 col-12 for-footer">
            <h1>{product.title}</h1>
            <p>
              <b className="me-3">Qiymət</b> {product.price} m
            </p>
            <p>
              <b className="me-3">Vəziyyət</b> Yeni
            </p>
            <p>
              <b className="me-3">Tarix</b> {product.date}
            </p>
            <p onClick={() => show()}>
              {showNumber ? "Nömrəni gizlət" : "Nömrəni göstər"}
            </p>
            <b>
              <span onClick={() => show()} className="phone-number">
                {showNumber ? (
                  <span>{product.phone}</span>
                ) : (
                  <span>{product.phone.substring(0, 13)}**</span>
                )}
              </span>
            </b>
            <br />
            <p className="mt-5">
              <b>Əlavə məlumat</b>
            </p>
            <p className="justify-content">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
