import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";

import Headers from "./components/Headers";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
function App() {

  const router = useRoutes(routes);

  return (
    // <ContextDataProvider>
    <div className="app">
      {/* Start Content */}
      <Headers />
      <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
        <div className="card">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <main>
            <p>Test Title ...</p>
            <div className="card-details">
              <div>
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
              </div>
              <p>231$</p>
            </div>
            <button>Add to Basket</button>
          </main>
        </div>
        <div className="card">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <main>
            <p>Test Title ...</p>
            <div className="card-details">
              <div>
                <AiFillStar style={{ color: "orange" }} />
                <AiFillStar style={{ color: "orange" }} />
                <AiFillStar style={{ color: "orange" }} />
                <AiFillStar style={{ color: "orange" }} />
                <AiFillStar style={{ color: "orange" }} />
              </div>
              <p>231$</p>
            </div>
            <button>Add to Basket</button>
          </main>
        </div>
      </main>

      {/* Finish Content */}

      <footer>
        <a target={"_blank"}>
          mohammad
        </a>
      </footer>
    </div>
    // </ContextDataProvider>
  );
}

export default App;
