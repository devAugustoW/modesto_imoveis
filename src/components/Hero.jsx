import "./Hero.css";
import banner from "../assets/banner.png";

const Hero = () => {
  return (
   <section className="hero">
      <div className="hero-img">
         <img className="banner" src={banner} alt="imagem de sofá com uma mes de centro, uma mesa de lado e um vaso de plantas do outro lado" />
      </div>

      <div className="hero-text">
         <h1 className="hero-text-title">Encontre o seu próximo lar</h1>
         <h4 className="hero-text-text">Encontre imóveis novos ou usados em qualquer lugar da cidade.</h4>
      </div>

      <div className="hero-search-container">
         <div className="hero-search">
            <label className="hero-search-label">Bairro</label>
            <input type="text" placeholder="Bairro"/>               
         </div>

         <div className="hero-search">               
            <label className="hero-search-label">Propriedade</label>
            <input type="text" placeholder="Propriedade"/>
         </div>

         <div className="hero-search">               
            <label className="hero-search-label">Preço máximo</label>
            <input type="text" placeholder="Preço máximo"/>
         </div>

         <div className="hero-btn-box">
            <button className="hero-btn-search">
               <i className="uil uil-search hero__icon"></i>
            </button>
         </div>
      </div>
   </section>
  )
}

export default Hero;