import styles from './TryBtn.module.css';

const TryBtn = () => {
    return (
        <div className={styles.tryCard}>
            <a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer">
                <p className={styles.tryDescription1}>COOKING note+で</p>
                <p className={styles.tryDescription2}>公式レシピを</p>
                <h3 className={styles.tryTitle}>
                    <span className={styles.titleJa}>試す</span>
                    <span className={styles.titleEn}>TRY</span>
                </h3>
                <div className={styles.linkWrapper}>
                    <div className={styles.roundButton}>
                        <span className={styles.openIcon}><img src="./image/icon_open_in_new_wh.svg" /></span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default TryBtn