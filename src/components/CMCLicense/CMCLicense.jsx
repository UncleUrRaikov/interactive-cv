import { useRef } from "react";
import style from "./CMCLicense.module.css";

function CMCLicense() {

  const cardref = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // позициаонка мыши внутри карточки
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    //Вычисляем угол наклона
    
    const rotateX = ((y - centerY) / centerY) * 10; // Максимальный наклон 10 градусов
    const rotateY = ((x - centerX) / centerX) * -10;
  
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  const handleMouseLeave = () => {
  
    const card = cardref.current;
    if (card) card.style.transform = "rotateX(0) rotateY(0)";
  }

  return(

    <section id="License">
      <div
        className={style.card}
        ref={cardref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="/license.svg"
          alt="Лицензия Комунизм Мемов"
          className={style.image}
        />
      </div>
    </section>

  );
}
export default CMCLicense;