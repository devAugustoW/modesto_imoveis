import "./FormType.css";

const FormType = () => {
   return (
      <div className="form-type">
         {/* Inserir Tipo de Propriedade e Categoria de Propriedade */}
         <div className="property-type-section">
            <h4 className="section-title">Tipo de Propriedade</h4>

            <label className="checkbox-label">
               <input
                  type="checkbox"
                  name="apartment"
                  className="checkbox-input"
               />
                <span className="checkbox-text">Apartamento</span>
            </label>

            <label className="checkbox-label">
               <input
                  type="checkbox"
                  name="house"
                  className="checkbox-input"
               />
               <span className="checkbox-text">Casa</span>
            </label>

            <label className="checkbox-label">
               <input
                  type="checkbox"
                  name="commercial"
                  className="checkbox-input"
               />
               <span className="checkbox-text">Comercial</span>
            </label>
         </div>

         <div className="category-type-section">
            <h4 className="section-title">Categoria</h4>
            <label className="checkbox-label">
               <input
               type="checkbox"
               name="rent"
               className="checkbox-input"
               />
               <span className="checkbox-text">Aluguel</span>
            </label>

            <label className="checkbox-label">
               <input
                  type="checkbox"
                  name="Selling"
                  className="checkbox-input"
               />
               À venda
            </label>
         </div>
      </div>
   )
}

export default FormType;