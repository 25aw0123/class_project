import styles from './ConceptSection.module.css';

const ConceptSection = () => {
  return (
    <section id="concept-section" className={styles.conceptSection}>
      <div className={styles.innerContent}>
        <div className={styles.textWrapper}>
          <h2 className={styles.conceptTitle}>CONCEPT</h2>
          <h3 className={styles.taglineVertical}>
            <p className={styles.line1}>毎日のごはんに、</p>
            <p className={styles.line2}>自分らしさを取り戻す。</p>
          </h3>
          <p className={styles.description}>
            毎日の料理、ついこなすだけになっていませんか？
            本当はもっと自由で、自分を大切にする時間のはず。
            「ホームクッキング通信」は、レシピという<span>「正解」</span>だけでなく、 
            調味料の役割や、調理法の<span>「理由」</span>をお届けします。
            「なぜ」がわかれば、料理はもっと楽しく、あなたらしく！
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="./image/top/top_concept_happy_eating.png" alt="女性が笑って食事をしている様子" className={styles.conceptImage} />
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;