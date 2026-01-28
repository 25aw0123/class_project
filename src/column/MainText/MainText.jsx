import styles from './MainText.module.css';

const MainText = ({ article }) => {

  return (
    <div className={styles.mainText}>
      <section id="section1">
        <h2 data-number="1"><span className={styles.titleText}>{article.sections[0].index1}</span></h2>
        <p>{article.sections[0].content}</p>
      </section>

      <section id="section2">
        <h2 data-number="2"><span className={styles.titleText}>{article.sections[1].index2}</span></h2>
        <p>{article.sections[1].content}</p>
        <div className={styles.pointBox}>
          <div className={styles.pointHeader}>
            <span className={styles.pointLabel}>POINT</span>
          </div>
          <div className={styles.pointContent}>
            <p>{article.sections[1].point}</p>
            <figure>
              <img className={styles.pointImg} src={article.sections[1].img} alt={article.sections[1].caption} />
              <figcaption className={styles.pointCaption}>{article.sections[1].caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="section3">
        <h2 data-number="3"><span className={styles.titleText}>{article.sections[2].index3}</span></h2>
        <p className={styles.content}>{article.sections[2].content}</p>
        <div className={styles.pointBox}>
          <div className={styles.pointHeader}>
            <span className={styles.pointLabel}>POINT</span>
          </div>
          <div className={styles.pointContent}>
            <p>{article.sections[2].point}</p>
            <figure>
              <img className={styles.pointImg} src={article.sections[2].img} alt={article.sections[2].caption} />
              <figcaption className={styles.pointCaption}>{article.sections[2].caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="section4">
        <h2 data-number="4"><span className={styles.titleText}>{article.sections[3].index4}</span></h2>
        <p className={styles.content}>{article.sections[3].content}</p>
      </section>
    </div>
  )
}

export default MainText