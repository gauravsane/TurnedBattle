import styles from './styles.module.css'

export const StartMenu = ( { onStartClick } ) =>{
    return <div className={styles.main}>
        <img className={styles.child1} src='/assets/map.png' alt='map' width="1750px" height="1000px"></img>
        <img className={styles.child2} src='/assets/gaara.jpg' alt='jiraya vs gaara' width="150px" height="250" onClick={onStartClick}></img>
        <a href="HomeScreen" ><img className={styles.child3} src='/assets/kisame.jpg' alt='jiraya vs gaara' width="150px" height="250" ></img></a>
        <a href="HomeScreen2" ><img className={styles.child4} src='/assets/orochimaru1.jpg' alt='jiraya vs gaara' width="150px" height="220"></img></a>
    </div>
}