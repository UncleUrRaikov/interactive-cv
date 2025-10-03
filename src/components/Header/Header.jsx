import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.header}>
                <div className={style.logo}> 
                    <img src="./image/logo.png" alt="logo" />
                </div>
                <nav className={style.nav}>
                    <a href="#me">Me</a>
                    <a href="#projects">My Projects</a>
                    <a href="#card">My CMC</a>
                    <a href="#contacts">My Contact</a>
                </nav>
        </header>
    );
}

export default Header;
