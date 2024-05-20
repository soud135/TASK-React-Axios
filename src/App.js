import Home from "./components/Home";

import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";

import PetList from "./components/PetList";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
     <Route path='/' Component={Home}/>
     <Route path='/pets' Component={PetList}/> 
     <Route path='/pets/:petId' Component={PetDetail}/> 
      </Routes>
     
    </div>
  );
}

export default App;
