import "./Login.css";

import email_icon from "../assets/loginIcons/email.png";
import password_icon from "../assets/loginIcons/password.png";


const Login = () => {
  return (
    <div className="login">
      <main className="login-container">
        <div className="login-header">
          <h2 className="login-title">Login</h2>
          <div className="underline"></div>
        </div>
        
        <form className="login-form">
          <label htmlFor="email-input">
            <img src={email_icon} alt="Imagem de ícone de e-mail" />
            <input type="text" id="email-input" placeholder="E-mail" />
          </label>

          <label htmlFor="password-input">
            <img src={password_icon} alt="Imagem de ícone de senha" />
            <input type="password" id="password-input" placeholder="Senha" />
          </label>

          <p className="forgot-password">Esqueceu a senha?<span> Clique aqui!</span></p>

          <button className="btn-login" type="submit">Login</button>
        </form>
      </main>
    </div>
  )
}

export default Login;