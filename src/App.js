import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Cards from "./components/Cards";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Cards />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
        <Route path="/card" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
