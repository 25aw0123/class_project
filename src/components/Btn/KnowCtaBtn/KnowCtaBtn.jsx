import { Link } from 'react-router-dom';
import styles from './KnowCtaBtn.module.css';

const KnowCtaBtn = () => {
    return (
        <div className={styles.knowCard}>
            <Link to="/articlepage">
                <h3 className={styles.knowTitle}>
                    <span className={styles.titleJa}>知る</span>
                    <span className={styles.titleEn}>KNOW</span>
                </h3>

                <p className={styles.knowDescription}>
                    料理の「なぜ？」を知る記事や、食にまつわるインタビュー。読んで、学んで、心が軽くなる記事一覧はこちらから。
                </p>

                <div className={styles.linkWrapper}>
                    <div className={styles.articleLink}>
                        記事一覧を見る
                    </div>

                    <span className={styles.arrowDots}></span>

                    <div to="/articlepage" className={styles.roundButton} aria-label="記事一覧へ">
                        <span className={styles.arrowIcon}>→</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default KnowCtaBtn;