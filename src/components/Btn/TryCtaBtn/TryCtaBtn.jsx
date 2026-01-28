import styles from './TryCtaBtn.module.css';

const TryCtaBtn = () => {
  return (
          <div className={styles.tryCard}>
              <a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer">
                  <h3 className={styles.tryTitle}>
                      <span className={styles.titleJa}>試す</span>
                      <span className={styles.titleEn}>TRY</span>
                  </h3>
  
                  <p className={styles.tryDescription}>
                      理由がわかったら、さっそく試してみよう。毎日の献立に役立つ、COOKING note+の豊富な公式レシピはこちらから。
                  </p>
  
                  <div className={styles.linkWrapper}>
                      <div className={styles.articleLink}>
                          ホームクッキング
                      </div>
  
                      <span className={styles.arrowDots}></span>
  
                      <div className={styles.roundButton}>
                          <span className={styles.openIcon}><img src="/image/icon_open_in_new_wh.svg" /></span>
                      </div>
                  </div>
              </a>
          </div>
      );
  };

export default TryCtaBtn