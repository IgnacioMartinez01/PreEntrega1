import React, { useState } from "react";
import "./Login.css";
import Registro from "./Registro";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    onLogin();
    /*navigate("/feed");
    navigate("perfil");*/

    event.preventDefault();
    // Aquí iría la lógica para enviar los datos al servidor
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
