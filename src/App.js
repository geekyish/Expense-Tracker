import Home from "./pages/home";
import Header from "./components/header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AddExpense from "./pages/add-expense";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/add-expense" element={<AddExpense />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      </Routes>

    </Router>
   
  );
}

export default App;
