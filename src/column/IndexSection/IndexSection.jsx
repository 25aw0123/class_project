import styles from './IndexSection.module.css';

const IndexSection = ({ article }) => {

  const indexList = [
    { id: 'section1', text: article.sections[0]?.index1 },
    { id: 'section2', text: article.sections[1]?.index2 },
    { id: 'section3', text: article.sections[2]?.index3 },
    { id: 'section4', text: article.sections[3]?.index4 }
  ].filter(item => item.text);

  return (
    <>
    <nav className={styles.indexSection}>
      <h3 className={styles.index}>Index.</h3>
      <ol className={styles.indexList}>
        {indexList.map((item) => (
          <li key={item.id} className={styles.indexItem}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
    <img className={styles.line} src='/image/line.svg' alt='区切り線' />
    </>
  )
}

export default IndexSection