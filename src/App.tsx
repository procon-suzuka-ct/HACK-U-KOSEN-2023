import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Payment from "./pages/Payment.tsx";
import Design from "./pages/Design.tsx";
import Login from "./pages/Login.tsx";
import Template from "./Template.tsx";

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/payment"} element={<Payment/>}/>
          <Route path={"/design"} element={<Design/>}/>
          <Route path={"/login"} element={<Login/>}/>
        </Routes>
      </Template>
    </BrowserRouter>
  )
}

export default App
