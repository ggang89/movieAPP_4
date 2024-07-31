import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./router/Home";
import Detail from "./router/Detail";

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/">
        <h4>Home</h4>
      </NavLink>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/datail/:movie_Id" element={<Detail />}/>
        <Route path="*" element={ <h1> Not Found Page...👻</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
