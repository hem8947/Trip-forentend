import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import About from "./pages/About";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Trips from "./trip/trips";
import useAuth from "./Hooks/useAuth";
import AppLayout from "./layouts/AppLayout";

const ProtectedRoutes = ({ token, invalidToken }) => {
  if (!token || invalidToken) {
    return <Navigate to="/login" />;
  }

  return <AppLayout />;
};

const App = () => {
  const { token, logout } = useAuth();
  const [validating, setValidating] = useState(true);
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    setValidating(true);
    setIsValidToken(false);

    if (!token) {
      setValidating(false);
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      // Token should have an exp field for expiration
      const isExpired = decodedToken?.exp ? Date.now() / 1000 > decodedToken.exp : false;

      if (isExpired) {
        logout();
        setIsValidToken(false);
      } else {
        setIsValidToken(true);
      }
    } catch (err) {
      console.error("Token validation error:", err);
      logout();
      setIsValidToken(false);
    } finally {
      setValidating(false);
    }
  }, [token, logout]);


  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />

      
      <Route element={<ProtectedRoutes token={token} invalidToken={!isValidToken} />}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/trips" element={<Trips/>} />
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;



//rafce



      