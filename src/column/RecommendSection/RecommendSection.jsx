import styles from './RecommendSection.module.css';

const RecommendSection = ({ article }) => {
  return (
    <section className={styles.recommendSection}>
      <div className={styles.skewDecorator}></div>
      <div className={styles.skewDecorator2}></div>
      <h2 className={styles.sectionTitle}>おすすめレシピはこちら</h2>

      <div className={styles.scrollWrapper}>
        <div className={styles.recipeContainer}>
          {article.recommendRecipes.map((recipe, index) => (

            <div key={index} className={styles.recipeCard}>
              <a href={recipe.path} className={styles.recipeLink} target='_blank' rel="noopener noreferrer">
                <div className={styles.imgWrapper}>
                  <div className={styles.pickUpLabel}>
                    <span className={styles.tagDot}></span>
                    <span className={styles.pickUpText}>PICK UP.</span>
                  </div>
                  <img className={styles.recommendRecipe} src={recipe.img} alt={recipe.title} />
                  <p className={styles.recipeTitle}>{recipe.title}</p>
                  <span className={styles.moreLink}>レシピを見る</span>
                </div>                
              </a>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default RecommendSection