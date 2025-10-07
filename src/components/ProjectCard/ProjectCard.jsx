import { useState } from "react"; 
import style from "./ProjectCard.module.css";

function ProjectCard({ image, title, description,  }) {
    
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
      <div
          className={`${style.card} ${isExpanded ? style.active : ""}`} 
          onClick={toggleCard}
      >
        <div className={style.photo}>
          <img src={image} alt={title} className={{ width: "100%", height: "100%", objectFit: "cover"}} />
          {!isExpanded && (
            <div className={style.hint}>Press Here for discription</div>
          )}
        </div>
        <div className={style.meta}>
          <h3 className={style.name}>{title}</h3>
          {isExpanded && <p className={style.description}>{description}</p>}
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  