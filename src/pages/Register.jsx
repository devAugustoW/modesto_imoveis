import "./Register.css";
import { useState } from "react";

import FormAddress from "../components/FormRegister/FormAddress";
import FormType from "../components/FormRegister/FormType";
import FormUpload from "../components/FormRegister/FormUpload";

const Register = () => {
   const [cep, setCep] = useState("");
   const [address, setAddress] = useState("");

   const [name, setName] = useState("");   
   const [neighborhood, setNeighborhood] = useState("");
   const [city, setCity] = useState("");
   const [uf, setUf] = useState("");
   const [price, setPrice] = useState("");



   const handleSubmitRegisterForm = (e) => {
      e.preventDefault();
      console.log(cep)
      
   }


   return (
      <div className="register">
         {/* Cabeçalho do Formulário */}
         <main className="register-container">
            <div className="login-header">
               <h2 className="login-title">Cadastrar imóvel</h2>
               <div className="underline-register"></div>
            </div>

            <form className="register-form" onSubmit={handleSubmitRegisterForm}>
               <FormAddress cep={cep} setCep={setCep}/>
               <FormType />
               <FormUpload />         

               {/* Botão de Envio */}
               <button type="submit" className="submit-button">
                  Cadastrar Imóvel
               </button>  
            </form>
         </main>
      </div>
   )
}

export default Register;