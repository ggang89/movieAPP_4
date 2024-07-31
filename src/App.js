import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./router/Home";
import Detail from "./router/Detail";

function App() {
  return (
    <BrowserRouter>
      <NavLink>
        <h4>Home</h4>
      </NavLink>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
