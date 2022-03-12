import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
