import style from "./ProjectCard.module.css";

function ProjectCard({ image, title, description,  }) {
    return (
      <div className={style.card}>
        <div className={style.photo}>
          <img src={image} alt={title} />
          </div>
        <div className={style.meta}>
          <h3 className={style.name}>{title}</h3>
          <p className={style.description}>{description}</p>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  