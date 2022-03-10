import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const urlJson = "http://localhost:3000/db.json";
  // const [pizzas, setPizzas] = useState([]);
  const pizzas = useSelector((state) => state.pizzas.pizzas);
  const dispatch = useDispatch();

  // console.log(pizzas.pizzas);
  // console.log(dispatch);

  useEffect(() => {
    const fetchJson = async () => {
      try {
        const response = await fetch(urlJson);
        const json = await response.json();
        dispatch(setPizzas(json.pizzas));
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
          <Route exact path="/" element={<Home pizzas={pizzas} />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
