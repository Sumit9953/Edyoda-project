import "./App.css";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
        
      </>
    </BrowserRouter>
  );
}

export default App;
