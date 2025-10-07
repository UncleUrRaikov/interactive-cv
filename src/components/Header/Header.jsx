import { useState, useEffect } from "react";
import style from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);

  // Блокируем прокрутку фона, когда меню открыто
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  return (
    <header className={style.header}>
      <div className={style.inner}>
        <div className={style.logo}>
          {/* Логотип: лучше положить файл в public/images/logo.png и использовать "/images/logo.png" */}
          <a href="#me"><img src="/images/logo.png" alt="logo" /></a>
        </div>

        {/* Бургер-кнопка (видна только на мобайле) */}
        <button
          className={style.menuButton}
          onClick={toggle}
          aria-haspopup="true"
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          <span className={style.burger} />
        </button>

        {/* Навигация — обычная строка на десктопе, выезжающая панель на мобилке */}
        <nav className={`${style.nav} ${open ? style.open : ""}`} role="navigation">
          <a href="#me" onClick={close}>Me</a>
          <a href="#projects" onClick={close}>My Projects</a>
          <a href="#card" onClick={close}>My CMC</a>
          <a href="#contacts" onClick={close}>My Contact</a>
        </nav>
      </div>

      {/* Оверлей: затемняет страницу и закрывает меню при клике */}
      <div
        className={`${style.overlay} ${open ? style.visible : ""}`}
        onClick={close}
        aria-hidden={!open}
      />
    </header>
  );
}

export default Header;
