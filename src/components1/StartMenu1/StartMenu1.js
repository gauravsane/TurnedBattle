import styles from './styles.module.css'

export const StartMenu1 = ({onStartClick}) =>{
    return <div className={styles.main}>
    <button className={styles.startButton} onClick={onStartClick}>
        <img src='/assets/jiraya vs kisame.jpeg' alt='jiraya vs gaara' width="520px" ></img>
    </button>
    </div>
}