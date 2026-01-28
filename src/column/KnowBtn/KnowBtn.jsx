import styles from './KnowBtn.module.css';
import { Link } from 'react-router-dom';

const KnowBtn = () => {
    return (
        <div className={styles.knowCard}>
            <Link to="/articlepage">
                <p className={styles.knowDescription1}>記事一覧から</p>
                <p className={styles.knowDescription2}>料理の「なぜ？」を</p>
                <h3 className={styles.knowTitle}>
                    <span className={styles.titleJa}>知る</span>
                    <span className={styles.titleEn}>KNOW</span>
                </h3>
                <div className={styles.linkWrapper}>
                    <div to="/articlepage" className={styles.roundButton} aria-label="記事一覧へ">
                        <span className={styles.arrowIcon}>→</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default KnowBtn