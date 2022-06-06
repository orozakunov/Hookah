import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CatalogPage from "./views/CatalogPage";
import HomePage from "./views/HomePage";
import axios from "axios";

function App() {
  const getProducts = "http://localhost:3500/products";
  const getlaunge = "http://localhost:3500/launge";
  const getPopular = "http://localhost:3500/popularMix"; 
  const [data, setData] = useState([]);
  const [launge, setLaunge] = useState([]);
  const [mix, setMix] = useState([]);

  useEffect(() => {
    axios.get(getProducts).then((res) => {
      setData(res.data);
      console.log();
    });
  }, []);

  useEffect(() => {
    axios.get(getlaunge).then((res) => {
      setLaunge(res.launge);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(getPopular).then((res) => {
      setMix(res.mix);
      console.log(res.mix);
    })
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage mix={mix}/>} />
        <Route path="/catalog" element={<CatalogPage data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
