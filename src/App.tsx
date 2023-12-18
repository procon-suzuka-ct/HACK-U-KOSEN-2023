import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Payment from "./pages/Payment.tsx";
import Design from "./pages/Design.tsx";
import Login from "./pages/Login.tsx";
import Confirmation from "./pages/Confirmation.tsx";
import Finish from "./pages/finish.tsx";
import Change from "./pages/Change.tsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/payment"} element={<Payment/>}/>
        <Route path={"/design"} element={<Design/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/confirmation"} element={<Confirmation/>}/>
        <Route path={"/finish"} element={<Finish/>}/>
        <Route path={"/change"} element={<Change/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
