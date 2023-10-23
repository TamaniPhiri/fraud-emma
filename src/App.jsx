import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Transactions from "./components/Transactions";
import Login from "./pages/Login";

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/login" Component={Login}/>
        </Routes>
  );
};

export default App;
