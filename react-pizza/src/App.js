import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

export default function App() {
  const urlJson = "http://localhost:3001/pizzas";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJson = async () => {
      try {
        const response = await fetch(urlJson);
        const json = await response.json();
        dispatch(setPizzas(json));
      } catch (error) {
        alert("Ошибка не удалось получить данные от сервера");
      }
    };
    fetchJson();
  }, [dispatch]);

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
