import React, { useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Perfil from "./Components/Perfil";
import Feed from "./Components/Feed";
import Registro from "./Components/Registro";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Simula que el usuario se ha
  };

  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de registro */}
        <Route exact path="/" element={<Registro />} />

        {/* Ruta de login */}
        <Route exact path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Ruta de perfil con protección de autenticación */}
        <Route
          exact
          path="/perfil"
          element={isLoggedIn ? <Perfil /> : <Navigate to="/login" replace />}
        />

        {/* Ruta del feed con protección de autenticación */}
        <Route
          exact
          path="/feed"
          element={isLoggedIn ? <Feed /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
