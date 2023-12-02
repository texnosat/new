import { useState } from "react";
import "./Filter.css";

function Filter() {
  const [filter, setFilter] = useState(true);
  const [open, setOpen] = useState([]);

  function changeFilter() {
    setFilter(!filter);
  }

  return (
    <div>
      <div className="filter">
        <div className="container text-center">
          <div className="row">
            <div className="col-5">
              <span>Qiymət : </span>
              <input
                type="number"
                placeholder="Min"
                className="choose-price me-2"
              />
              <input type="number" placeholder="Max" className="choose-price" />

              <select name="" id="" className="mt-2 ms-2">
                <option value="">Ucuzdan bahaya</option>
                <option value="">Bahadan ucuza</option>
              </select>
            </div>

            <div className="col-3 mt-2">
              <span className="me-2">Yeni ?</span>

              <select name="" id="">
                <option value="">Bəli</option>
                <option value="">Xeyr</option>
              </select>
            </div>

            <div className="col-3 mt-2">
              <span className="me-2">Çatdırılma</span>
              <select name="" id="">
                <option value="">Var</option>
                <option value="">Yoxdur</option>
              </select>
            </div>

            <div className="col-1">
              <button className="mt-2 btn-select">Axtar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-filter">
        <div className="container">
          <span onClick={() => changeFilter()}>
            {filter ? (
              <i className="fa-solid fa-filter"></i>
            ) : (
              <div>
                <i className="fa-solid fa-filter-circle-xmark"></i>

                <div>
                  <span>Qiymət : </span>
                  <input
                    type="number"
                    placeholder="Min"
                    className="choose-price me-2"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="choose-price"
                  />

                  <select name="" id="" className="mt-2 ms-2">
                    <option value="">Ucuzdan bahaya</option>
                    <option value="">Bahadan ucuza</option>
                  </select>

                  <div className="col-3 mt-2">
                    <span className="me-2">Yeni ?</span>

                    <select name="" id="">
                      <option value="">Bəli</option>
                      <option value="">Xeyr</option>
                    </select>
                  </div>

                  <div className="col-3 mt-2">
                    <span className="me-2">Çatdırılma</span>
                    <select name="" id="">
                      <option value="">Var</option>
                      <option value="">Yoxdur</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Filter;
