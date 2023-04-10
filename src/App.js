import Home from "./pages/home";
import Header from "./components/header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AddExpense from "./pages/add-expense";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/add-expense" element={<AddExpense />} />
      </Routes>

    </Router>
   
  );
}

export default App;
