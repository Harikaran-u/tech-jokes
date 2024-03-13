import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import JokeTable from "./components/JokeTable";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<JokeTable />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
