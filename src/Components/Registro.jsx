import React, { useState } from "react";
import './Registro.css';


export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleRegisters = async (e) => {
        e.preventDefault();
        if (!email || !username || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Registro exitoso');
                setEmail('');
                setUsername('');
                setPassword('');
            } else {
                setError(data.message || 'Error desconocido');
            }
        } catch (error) {
            setError('Error en el servidor');
        }
    };

    return (
        <div className="registro-container">
            <h2>Registro</h2>
            <form onSubmit={handleRegisters}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    required
                />
                <button type="submit" className="button">Registrarse</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
        </div>
    );
}
