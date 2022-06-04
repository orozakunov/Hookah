import { Route, Routes } from "react-router-dom";
import CatalogPage from "./views/CatalogPage";
import HomePage from "./views/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </div>
  );
}

export default App;
