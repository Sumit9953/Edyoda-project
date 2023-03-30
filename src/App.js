import "./App.css";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import QuizModules from "./pages/QuizModule"

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/modules" exact Component={Modules} />
          <Route path="/modules/assignment" exact element={<Modules />} />
          <Route path="/modules/quiz" exact element={<QuizModules />} />
        </Routes>
        
      </>
    </BrowserRouter>
  );
}

export default App;
