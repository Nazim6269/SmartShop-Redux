import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/carts" Component={Cart} />
          <Route exact path="/product/:productId" Component={Product} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
