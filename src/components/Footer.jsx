import "./Footer.css"
import { Link } from "react-router-dom";


const Footer = () => {
   return (
      <footer className="footer-container">
         <div className="space-footer"></div>
         <div className="subscribe">
            <h4 className="subscribe-title">Receba nossas novidades por email</h4>

            <form className="footer-form">
               <div className="wrap-form">
                  <label className="wrap-form-label"></label>
                  <input className="wrap-form-input" type="email" placeholder="Coloque o o seu e-mail aqui"/>
               </div>

               <button className="btn-subscribe">Enviar</button>
            </form>
         </div>

         <div className="footer-container-content">
            <Link className="footer-title" to="/"><h1>Modesto</h1></Link>

            <div className="footer-box-icons">
               <p className="footer-icon">Face</p>
               <p className="footer-icon">Twiter</p>
               <p className="footer-icon">Insta</p>
               <p className="footer-icon">Linkedin</p>
            </div>

            <div className="footer-content">
               <div className="content-resources">
                  <h3>RECURSOS</h3>

                  <p>Aplicação</p>
                  <p>Documentação</p>
                  <p>Systema</p>
                  <p>FAQ</p>
               </div>

               <div className="content-locais">
                  <h3>Locais</h3>

                  <p>Recife</p>
                  <p>Carneiros</p>
                  <p>Porto de galinhas</p>
                  <p>Olinda</p>
               </div>

               <div className="content-cia">
                  <h3>Imobiliária</h3>

                  <p>Sobre nós</p>
                  <p>Blog</p>
                  <p>Parceiros</p>
                  <p>Feiras</p>
               </div>

               <div className="content-social">
                  <h3>Social</h3>

                  <p>Facebook</p>
                  <p>Twiter</p>
                  <p>Instagram</p>
                  <p>Linkedin</p>
               </div>
            </div>
         </div>         
      </footer>
   )
}

export default Footer