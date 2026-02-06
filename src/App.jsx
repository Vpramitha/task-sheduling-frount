import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard"; 
import ProtectedRoute from "./ProtectedRoute";
import SelectCompany from "./components/SelectCompany";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/select-company"
          element={
            <ProtectedRoute>
              <SelectCompany />
            </ProtectedRoute>}
        />
    </Routes>
  );
}

export default App;
