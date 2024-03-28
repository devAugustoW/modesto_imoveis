import "./RecentCard.css";
import { list } from "../Data.js";


const RecentCard = () => {

   return (
      <div className="recentCard">
         {list.map((value, id) => {
            const { cover, category, location, name, price, type} = value;
            return (
               <div className="card" key={id}>
                  <div className="img-box">
                     <img className="img" src={cover} alt="" />
                  </div>

                  <div className="text">.
                     <div className='category'>
                        <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", 
                                       color: category === "For Sale" ? "#25b579" : "#ff9800" }}>
                                       {category}
                        </span>

                        <i className='uil uil-heart card__icon'></i>
                     </div>

                     <h4 className="title-card">{name}</h4>

                     <p className="location-card">
                        <i className='uil uil-location'>xx</i> 
                        {location}
                     </p>
                  </div>

                  <div className='footer-card'>
                     <button className='btn-price'>{price}</button> 
                     <span className="footer-card-type">{type}</span>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default RecentCard;