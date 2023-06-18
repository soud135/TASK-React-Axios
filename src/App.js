import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetList from "./components/PetList";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/pets/:id" element={<PetDetail />} />
      </Routes>
    </div>
  );
}

export default App;
