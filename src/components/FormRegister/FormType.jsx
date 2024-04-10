import "./FormType.css";
import { useState } from 'react';

const FormType = ({propertyType, setPropertyType, categoryType, setCategoryType}) => {

   const handlePropertyType = (propertyName) => {
      setPropertyType(propertyName);
      
   };

   const handleCategoryType = (categoryName) => {
      setCategoryType(categoryName);
      
   }

   return (
      <div className="form-type">
         {/* Tipo de Propriedade */}
         <div className="property-type-section">
            <h4 className="section-title">Tipo de Propriedade</h4>
            <label className="checkbox-label">
               <input
                  type="checkbox"
                  name="apartment"
                  className="checkbox-input"
                  checked={propertyType === 'apartment'}
                  onChange={() => handlePropertyType('apartment')}
               />
                <span className="checkbox-text">Apartamento</span>
            </label>
            <label className="checkbox-label">
               <input
                  type="checkbox"
                  name="house"
                  className="checkbox-input"
                  checked={propertyType === 'house'}
                  onChange={() => handlePropertyType('house')}
               />
               <span className="checkbox-text">Casa</span>
            </label>
            <label className="checkbox-label">
               <input
                  type="checkbox"
                  name="commercial"
                  className="checkbox-input"
                  checked={propertyType === 'commercial'}
                  onChange={() => handlePropertyType('commercial')}
               />
               <span className="checkbox-text">Comercial</span>
            </label>
         </div>

         {/* Categoria de Propriedade */}
         <div className="category-type-section">
            <h4 className="section-title">Categoria</h4>
            <label className="checkbox-label">
               <input
               type="checkbox"
               name="rent"
               className="checkbox-input"
               checked={categoryType === "rent"}
               onChange={() => handleCategoryType("rent")}
               />
               <span className="checkbox-text">Aluguel</span>
            </label>

            <label className="checkbox-label">
               <input
                  type="checkbox"
                  name="Selling"
                  className="checkbox-input"
                  checked={categoryType === "selling"}
                  onChange={() => handleCategoryType("selling")}
               />
               À venda
            </label>
         </div>
      </div>
   )
}

export default FormType;