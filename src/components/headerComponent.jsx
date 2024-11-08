import { Link } from "react-router-dom";
import styles from '../assets/styles/HeaderComponent.module.css'

function HeaderComponent(){


    return (
        <div className="container">
            <nav className={`${styles.header__wrapper}`}>
                <Link className={`${styles.header__link} ${styles.header__link__selected}`} to="/">Home</Link>  
                <Link className={`${styles.header__link}`} to="projects">Projects</Link>  
                <Link className={`${styles.header__link}`} to="about">About</Link>
            </nav>
        </div>
    )
}

export default HeaderComponent