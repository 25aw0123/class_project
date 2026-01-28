import styles from './HeadlineSection.module.css';

const HeadlineSection = ({ article }) => {
  const { tagColor } = article;

  return (
    <div className={styles.headlineContainer}>
    <section className={styles.container}>
      
      <div className={styles.topInfo}>
        <span className={styles.category}>{article.category}</span>
        <span className={styles.date}>{article.date}</span>
      </div>

      <h1 className={styles.title}>{article.title}</h1>

      <div className={styles.visualArea}>
        <div className={styles.typeWrapper}>
          <span className={styles.tagDot} style={{ backgroundColor: tagColor }}></span>
          <span className={styles.type}>{article.type}</span>
        </div>
        <div className={styles.imgWrapper} style={{ '--shadow-color': tagColor }}>
          <img className={styles.img} src={article.img} alt={article.title} />
        </div>
      </div>

      <p className={styles.preface}>{article.preface}</p>
    </section>
    </div>
  )
}

export default HeadlineSection