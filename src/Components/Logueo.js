import React, { useState } from 'react';
import { app } from '../fb';

function Login({ usuario, setUsuario }) {
    const [isRegistrando, setIsRegistrando] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('usuario');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'emailField') setEmail(value);
        else if (name === 'passwordField') setPassword(value);
        else if (name === 'rolField') setRol(value);
    };

    const handleAuthAction = async (action) => {
        try {
            setError('');
            setSuccessMessage('');
            if (!email || !password) throw new Error('Por favor, ingresa tu correo y contraseña.');
            if (password.length < 6) throw new Error('La contraseña debe tener al menos 6 caracteres.');

            let usuarioFirebase;
            if (action === 'register') {
                usuarioFirebase = await app.auth().createUserWithEmailAndPassword(email, password);
                setSuccessMessage('Cuenta creada exitosamente. Inicia sesión.');
            } else if (action === 'login') {
                usuarioFirebase = await app.auth().signInWithEmailAndPassword(email, password);
                if (usuarioFirebase) {
                    setUsuario && setUsuario(usuarioFirebase);
                    setSuccessMessage('Inicio de sesión exitoso.');
                    showWelcomeMessage();
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleAuthAction(isRegistrando ? 'register' : 'login');
    };

    const handleLogout = () => {
        app.auth().signOut();
        setUsuario && setUsuario(null);
    };

    const showWelcomeMessage = () => {
        const latitude = -1.788672;
        const longitude = -77.986533;
        const zoom = 18;
        const googleMapsLink = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d0.0012293415987417435!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1606055120673!5m2!1sen!2sus&z=${zoom}`;

        const styles = `
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    text-align: center;
                }
                h1 {
                    color: #333;
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                p {
                    color: #666;
                    font-size: 16px;
                    margin-bottom: 20px;
                }
                .map-container {
                    width: 800px;
                    height: 600px;
                    margin: 0 auto;
                    overflow: hidden;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                }
                iframe {
                    width: 100%;
                    height: 100%;
                    border: 0;
                }
                button {
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 5px;
                    margin-top: 20px;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
        `;

        const newWindow = window.open('', '_blank');
        newWindow.document.write(
            '<html><head><title>Mensaje de Bienvenida</title>' + styles + '</head>' +
            '<body>' +
            '<h1>Bienvenido Usuario</h1>' +
            '<p>Gracias por iniciar sesión. Esperamos que disfrutes de tu experiencia.</p>' +
            '<div class="map-container">' +
            '<iframe src="' + googleMapsLink + '"></iframe>' +
            '</div>' +
            '<button onclick="cerrarVentana()">Cerrar Sesión</button>' +
            '<script>' +
            'function cerrarVentana() {' +
            '   window.close();' +
            '}' +
            '</script>' +
            '</body></html>'
        );
    };

    return (
        <div className="login-container">
            {usuario ? (
                <div>
                    <p>Sesión activa como: {usuario.email}</p>
                    <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
                </div>
            ) : (
                <div>
                    <h1>{isRegistrando ? "Regístrate" : "Inicia Sesión"}</h1>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="emailField">Correo</label>
                            <input type="email" id="emailField" name="emailField" value={email} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordField">Contraseña</label>
                            <input type="password" id="passwordField" name="passwordField" value={password} onChange={handleInputChange} />
                        </div>
                        {isRegistrando && (
                            <div className="form-group">
                                <label htmlFor="rolField">Rol</label>
                                <select id="rolField" name="rolField" value={rol} onChange={handleInputChange}>
                                    <option value="usuario">Usuario</option>
                                    <option value="administrador">Administrador</option>      
                                </select>
                            </div>
                        )}
                        {error && <p className="error-message">{error}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        <button type="submit" className="submit-button">
                            {isRegistrando ? "Regístrate" : "Iniciar Sesión"}
                        </button>
                    </form>
                    <button onClick={() => setIsRegistrando(!isRegistrando)} className="toggle-button">
                        {isRegistrando ? "¿Ya tienes una cuenta? ¡Inicia Sesión!" : "¿No tienes una cuenta? ¡Regístrate!"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Login;