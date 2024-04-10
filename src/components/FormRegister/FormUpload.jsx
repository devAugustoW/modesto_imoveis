import "./FormUpload.css";
import { useState } from "react";


const FormUpload = () => {
   const [images, setImages] = useState([]);

   return (
      <div className="upload-images">
         {/* Inserir Fotos via upload */}
         <label htmlFor="image-input">Upload de Imagens: </label>
         <input
            type="file"
            id="image-input"
            multiple
            accept="image/*"
            className="image-input"
         />
            
         {/* Botão para Capturar Foto da Câmera (dispositivos móveis) */}
         {navigator.mediaDevices && navigator.mediaDevices.getUserMedia && (
            <button type="button" className="capture-button">
               Tirar Foto
            </button>
         )}

         {/* Exibir Imagens Selecionadas */}
         <div className="selected-images">
            {images.map((imageUrl, index) => (
               <img
                  key={index}
                  src={imageUrl}
                  alt={`Imagem ${index + 1}`}
                  style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }}
               />
            ))}
         </div>
      </div>
   )
}

export default FormUpload;