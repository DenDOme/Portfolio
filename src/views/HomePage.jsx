import HeaderComponent from "../components/headerComponent"
import styles from '../assets/styles/HomePage.module.css'


function HomePage() {
  return (
    <>
      <HeaderComponent />

      <div className="container">
        <div className={`${styles.grid}`}>
          <div className={`${styles.block} ${styles.block1}`}>
            <h2 className={`${styles.block__title}`}>Кто я?</h2>
            <p className={`${styles.block__text}`}>
            Привет, меня зовут Шен Керим. Я front-end разработчик и студент, готовый справляться с любыми препятствиями. По любым вопросам — свяжитесь со мной!
            </p>
          </div>
          <div className={`${styles.block} ${styles.block2}`}>

          </div>
          <div className={`${styles.block} ${styles.block3}`}>
            <h1 className={`${styles.block__header}`}>Front-end<br /> Разработчик</h1>
          </div>
          <div className={`${styles.block} ${styles.block4}`}>
            {/* <img src="" alt="github user profile" className={`${styles.block__img}`} /> */}
            <div className={`${styles.block__img}`}></div>
            <h2 className={`${styles.block__name}`}>Шен Керим<br /> Абдулкеримович</h2>
          </div>
          <div className={`${styles.block} ${styles.block5}`}>
            <h2 className={`${styles.block__title}`}>Технологии которые я использую</h2>
          </div>
          <div className={`${styles.block} ${styles.block6}`}>
            <h2 className={`${styles.block__title}`}>Образование</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
