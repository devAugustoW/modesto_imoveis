import "./FormAddress.css";
import { useState } from 'react';


const FormAddress = ({cep, setCep, address, setAddress, name, setName, neighborhood, setNeighborhood, city, setCity, uf, setUf, price, setPrice}) => {

   const handleCepBlur = async() => {
      try{
         const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
         const data = await response.json();

         if (response.ok) {
            console.log(`logradouro vindo de data.logradouro: ${data.logradouro}`);   
      
            setAddress(data.logradouro);
            console.log(`Logradouro vindo de address: ${address}`);

         } else {
            throw new Error(`Erro ao buscar CEP: ${data.message}`);
         }
      }catch(error){
         console.error(error);
      }
   }
   
   return (
      <div className="form-address">
         <div className="address-details">
            <div className="address-section address-cep">
               <label htmlFor="cepInput">CEP</label>
               <input type="text" 
                  id="cepInput"
                  name="cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  onBlur={handleCepBlur}/>
            </div>

            <div className="address-section address-name">
               <label htmlFor="nameInput">Nome</label>
               <input type="text" 
                  id="nameInput"
                  name="name"
                  value={name}
                  />
            </div>
         </div>

         <div className="address-details">
            <div className="address-section address-logradouro">
               <label htmlFor="addressInput">Logradouro</label>
               <input type="text" 
                  id="addressInput" 
                  name="address"
                  defaultValue={address}/>
            </div>


            <div className="address-section addres-number">
               <label htmlFor="numberInput">Número</label>
               <input type="text" id="numberInput"/>
            </div>

            <div className="address-section address-complemento">
               <label htmlFor="complementoInput">Complemento</label>
               <input type="text" id="complementoInput"/>
            </div>
         </div>

         <div className="address-details">
            <div className="address-section address-neighborhood">
               <label htmlFor="neighborhoodInput">Bairro</label>
               <input type="text" id="neighborhoodInput"/>
            </div>

            <div className="address-section address-city">
               <label htmlFor="cityInput">Cidade</label>
               <input type="text" id="cityInput"/>
            </div>

            <div className="address-section address-uf">
               <label htmlFor="ufInput">UF</label>
               <input type="text" id="ufInput"/>
            </div>
         </div>

         {/* Indesrir preço */}
         <div className="address-section address-price">
            <label htmlFor="priceInput">Preço</label>
            <input type="text" id="precoInput"/>
         </div>
      </div>
   )
}

export default FormAddress;