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
    setIsLoggedIn(true); // Simula que el usuario se ha logeado
  };

  console.log(isLoggedIn);


  //LocalStorage para almacenar el estado del login al reiniciarse
  /*const [text, setText] = useState(window.localStorage.getItem("text"));
  const setLocalStorage = value =>{
    try{
      setText(value)
      window.localStorage.setItem("text",value)
    } catch (error){
      console.error(error)
    }
  }*/

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de registro */}
       

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
