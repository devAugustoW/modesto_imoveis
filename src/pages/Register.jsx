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

   const [propertyType, setPropertyType] = useState("");
   const [categoryType, setCategoryType] =useState("");


   const handleSubmitRegisterForm = (e) => {
      e.preventDefault();
      const propertyData  = 
      {
         name: name,
         location: address,
         category: categoryType,
         price: price,
         type: propertyType,
      };

      console.log("Dados do imóvel cadastrado:", propertyData );

      setCep("");
      setAddress("");
      setName("");
      setNeighborhood("");
      setCity("");
      setUf("");
      setPrice("");
      setPropertyType("");
      setCategoryType("");
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
               <FormAddress cep={cep} setCep={setCep} address={address} setAddress={(setAddress)} name={name} setName={setName} neighborhood={neighborhood} setNeighborhood={setNeighborhood} city={city} setCity={setCity} uf={uf} setUf={setUf} price={price} setPrice={setPrice}/>

               <FormType propertyType={propertyType} setPropertyType={setPropertyType} categoryType={categoryType} setCategoryType={setCategoryType}/>
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