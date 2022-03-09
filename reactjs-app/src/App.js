import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/css/App.css';
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/adminpage" element={<AdminPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
