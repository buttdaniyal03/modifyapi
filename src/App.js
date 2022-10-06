import UseApi from "./Components/UseApi";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Detail from "./Components/Detail";

const App=()=> {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<UseApi/>} />
      <Route path="/detail" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
