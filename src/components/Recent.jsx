import "./Recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <main className="recent">
      
      <div className="recent-container-text">
        <h2 className="recent-title">Propriedades recentes</h2>
        <p className="recent-text">Conheça nossas opções de imóveis à venda, localizados em áreas privilegiadas, com infraestrutura completa e fácil acesso aos principais serviços e comércios. Agende uma visita e encontre o lar dos seus sonhos hoje mesmo.</p>
      </div>

      <RecentCard />
    </main>
  )
}

export default Recent;