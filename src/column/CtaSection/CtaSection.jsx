import styles from './CtaSection.module.css';
import { Link } from 'react-router-dom';
import LikeButton from '../../components/LikeButton/LikeButton';
//import KnowBtn from '../KnowBtn/KnowBtn';
import TryBtn from '../TryBtn/TryBtn';
import TryCtaBtn from '../../components/Btn/TryCtaBtn/TryCtaBtn';

const CtaSection = ({ article }) => {

  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Xで共有する");

  return (
    <section className={styles.background}>
      <div className={styles.ctaBackground}>
        <section className={styles.ctaContainer}>

          <p className={styles.sectionLabel}>この記事が参考になったら</p>
          <div className={styles.likeButton}>
            <LikeButton articleId={article.id} />
          </div>

          <img className={styles.line} src='./image/line.svg' alt='区切り線' />

          <p className={styles.sectionLabel}>この記事をシェア</p>
          <div className={styles.snsIcons}>
            <a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer"><img src="./image/logo_ig_brown.svg" alt="Instagram" /></a>
            <a href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer"><img src="./image/logo_x_brown.svg" alt="X" /></a>
          </div>

          <img className={styles.line} src='./image/line.svg' alt='区切り線' />

          <p className={styles.sectionLabel}>関連ワード</p>
          <div className={styles.tags}>
            {article.tags.map((tagName, index) => (
              <Link to={`/search?tag=${encodeURIComponent(tagName)}`} key={index} className={styles.tag} >
                {tagName}
              </Link>
            ))}
          </div>
        </section>

        <div className={styles.back}>
          <Link to="/articlepage" className={styles.backButton}>記事一覧へ戻る</Link>
        </div>          
        
        <div className={styles.cardWrapper}>
          <TryBtn />
        </div>

        <div className={styles.cardWrapper_pc}>
          <TryCtaBtn />
        </div>

        <nav className={styles.breadcrumb}>
          <Link to="/" className={styles.breadcrumbLink}>トップ</Link><span className={styles.breadcrumbArrow}>〉</span>
          <Link to="/articlepage" className={styles.breadcrumbLink}>記事一覧</Link><span className={styles.breadcrumbArrow}>〉</span>
          <span className={styles.breadcrumbTitle}>{article.title}</span>
        </nav>
      </div>
    </section>
  )
}

export default CtaSection