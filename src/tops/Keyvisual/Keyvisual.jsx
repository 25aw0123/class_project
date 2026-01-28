import styles from './Keyvisual.module.css';

const Keyvisual = () => {

    const taglineTop = (
        <>
            <p className={styles.line1}>料理の<b>「正解」</b>を</p>
            <p className={styles.line2}>探す場所から、</p>
        </>
    );

    const taglineBottom = (
        <>
            <p className={styles.line3}>料理の<b>「理由」</b>を</p>
            <p className={styles.line4}>見つける場所へ。</p>
        </>
    );

    return (
        <section className={styles.keyVisual}>
            <div className={styles.topSection}>
                <div className={styles.imageContainer}>
                    <img src="./image/top/top_kv_recipebook.png" alt="料理本が開かれている様子" width="431" className={styles.recipeBook} />
                </div>
                <div className={styles.taglineTopContainer}>
                    {taglineTop}
                </div>
            </div>

            <div className={styles.bottomSection}>
                <div className={styles.taglineBottomContainer}>
                    {taglineBottom}
                </div>
                <div className={styles.imageContainer}>
                    <img src="./image/top/top_kv_cooking_prep.png" alt="料理の下ごしらえをしている様子" width="448" className={styles.cookingPrep} />
                </div>
            </div>
        </section>
    );
};

export default Keyvisual