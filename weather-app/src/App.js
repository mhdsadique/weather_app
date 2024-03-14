import { Route, Routes } from "react-router-dom";


import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/Home";
import { Weather } from "./pages/weather";
export default function App() {
  return (
    <div className="App" >
      {/* <Navbar /> */}
      <Home/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}