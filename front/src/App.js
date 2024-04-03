import "./App.css";
import { Route, Routes} from "react-router-dom";
import  Home from "./Components/Home";
import  Nav  from "./Components/Nav";
import Lung from "./Components/Lung";

function App() {
  return (
    <div>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/lung" element={<Lung/>} />
    </Routes>
    </div>
    
  )
}

export default App;
