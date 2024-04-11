import "./FormUpload.css";
import { useState, useRef } from "react";


const FormUpload = () => {
   const [images, setImages] = useState([]);
   const videoRef = useRef(null);
   let theStream = null;

   const getUserMedia = (options, successCallback, failureCallback) => {
      const api =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      if (api) {
        return api.bind(navigator)(options, successCallback, failureCallback);
      }
   };

   const getStream = () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("User Media API not supported.");
        return;
      }
  
      const constraints = {
        video: true,
      };

      getUserMedia(
         constraints,
         (stream) => {
            if (videoRef.current) {
               if ("srcObject" in videoRef.current) {
                  videoRef.current.srcObject = stream;
               } else {
                  videoRef.current.src = (window.URL || window.webkitURL).createObjectURL(
                     stream
                  );
               } 
               theStream = stream;
            }
         },
         (err) => {
           alert("Error: " + err);
         }
         );
      };

      const takePhoto = async () => {
         if (!("ImageCapture" in window)) {
           alert("ImageCapture is not available");
           return;
         }
     
         if (!theStream) {
           alert("Grab the video stream first!");
           return;
         }
     
         const track = theStream.getVideoTracks()[0];
         const imageCapturer = new ImageCapture(track);
     
         try {
           const photoBlob = await imageCapturer.takePhoto();
           const imageUrl = URL.createObjectURL(photoBlob);
           setImages([...images, imageUrl]);
         } catch (err) {
           alert("Error capturing photo: " + err);
         }
      };


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
            <div>
               <button type="button" className="capture-button" onClick={getStream}>
                  Iniciar Câmera
               </button>
               <button type="button" className="capture-button" onClick={takePhoto}>
                  Capturar Foto
               </button>
            </div>
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
            
         {/* Exibir visualização da câmera */}
         <div className="camera-preview">
            <video ref={videoRef} autoPlay playsInline className="camera-video" />
         </div>
      </div>
   )
}

export default FormUpload;