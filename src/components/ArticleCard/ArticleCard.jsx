import styles from './ArticleCard.module.css';
import { Link } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';

const ArticleCard = ({ article }) => {
    const { id, tag, title, img, tagColor } = article;

    return (
        <div className={styles.articleCard}>
            <Link to={`/article/${id}`} className={styles.cardLink}>

                <div className={styles.tag}>
                    <span className={styles.tagDot} style={{ backgroundColor: tagColor }}></span>
                    <span>{tag}</span>
                </div>

                <div className={styles.cardImageWrapper}>
                    <img src={img} alt={title} className={styles.cardImage} />
                </div>

                <h3 className={styles.cardTitle}>{title}</h3>

                <div className={styles.cardFooter}>
                    <span className={styles.readLink}>記事を読む</span>
                    <span className={styles.arrow}>〉</span>
                    <div className="like-button-wrapper">
                        <LikeButton articleId={article.id} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ArticleCard;