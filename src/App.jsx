import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Transactions from "./components/Transactions";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/" Component={Login} />
      <Route path="/register" Component={Register} />
    </Routes>
  );
};

export default App;
