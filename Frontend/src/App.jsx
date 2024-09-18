import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" index element={<Home />} />
        <Route path="impressum" element={<Impressum />} />
      </Route>
    </Routes>
  );
}

export default App;
