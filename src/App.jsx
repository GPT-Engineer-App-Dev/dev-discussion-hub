import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index auth={auth} />} />
        <Route path="/register" element={<Register setAuth={setAuth} />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
