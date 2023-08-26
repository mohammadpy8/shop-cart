import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";

import Headers from "./components/Headers";
import Home from "./Pages/home/Home";
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
      {router}

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
