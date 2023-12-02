import { Link } from "react-router-dom";
import "./Footer.css";
import "./FooterNew.css";
import { useEffect, useState } from "react";
import AddToFav from "../Cart/addToFav";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/slices/favoritesSlice";

function Footer() {
  const { cartItems, heartFull } = useSelector((state) => state.cart);
  console.log(cartItems);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const cartQuantity = cartItems.length;

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  // const handleAddToCart = (id) => {
  //   dispatch(addItem(id));
  //   //setHeartActive(!heartActive);

  //   setIsAdded(true);

  //   setTimeout(() => {
  //     setIsAdded(false);
  //   }, 3000);
  // };

  useEffect(() => {
    const listItem = document.querySelectorAll(".list");

    function activateLink() {
      listItem.forEach((item) => {
        item.classList.remove("active");
      });

      this.classList.add("active");
    }

    listItem.forEach((item) => {
      item.addEventListener("click", activateLink);
    });
  }, []);

  return (
    <div>
      <footer className="text-center text-lg-start text-white mt-2">
        <section className="d-flex justify-content-between p-4 social-networks">
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="#" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">TexnoSat</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum totam repellat laboriosam praesentium.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#" className="text-white">
                    TexnoSat
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Menu
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <i className="fas fa-home mr-3"></i> Baku, AZ
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@example.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 994 (55) 555 55 55
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 994 (55) 555 55 55
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 footer-bottom">© 2023 TexnoSat</div>
      </footer>

      <div className="navigation ">
        <ul className="listWrap ">
          <li className="list">
            <a href={void 0}>
              <i className="fa-solid fa-house icon "></i>
              <span className="text" style={{ fontSize: "13px" }}>
                Ana səhifə
              </span>
            </a>
          </li>
          <li className="list footer-icon-badge">
            <a href={void 0}>
              <i className="fa-solid fa-heart icon"></i>
              <span className="text">Seçilmişlər</span>

              <div className="navbar icon-add-fav">
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
            </a>
          </li>
          <li className="list active">
            <a href={void 0}>
              <i className="fa-solid fa-plus icon"></i>
              <span className="text" style={{ fontSize: "13px" }}>
                Yeni elan
              </span>
            </a>
          </li>
          <li className="list">
            <a href={void 0}>
              <i className="fa-solid fa-message icon"></i>
              <span className="text">Mesajlar</span>
            </a>
          </li>
          <li className="list">
            <a href={void 0}>
              <i className="fa-solid fa-user icon"></i>
              <span className="text">Hesabım</span>
            </a>
          </li>
          <li className="indicator"></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
