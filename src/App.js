import './App.css';
import {Route, Routes} from "react-router-dom";
import HOME from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route index element={<HOME/>}/>
    </Routes>
  )
}

export default App
