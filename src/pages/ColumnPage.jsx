import { useParams } from 'react-router-dom';
import HeadlineSection from "../column/HeadlineSection/HeadlineSection"
import IndexSection from "../column/IndexSection/IndexSection"
import MainText from "../column/MainText/MainText"
import RecommendSection from "../column/RecommendSection/RecommendSection"
import CtaSection from "../column/CtaSection/CtaSection"
import { ALL_ARTICLES } from '../articles';
import styles from './ColumnPage.module.css';
import { Link } from 'react-router-dom';

const ColumnPage = () => {

  const { id } = useParams();
  const article = ALL_ARTICLES.find(item => item.id === Number(id));
  if (!article) {
    return (
      <div className={styles.noFound}>
        <h1 className={styles.notFoundTitle}>該当する記事はありません！</h1>
        <Link to="/articlepage" className={styles.backButton}>記事一覧へ戻る</Link>
      </div>
    );
  }

  return (
    <div>
      <HeadlineSection article={article} />
      <IndexSection article={article} />
      <MainText article={article} />
      <RecommendSection article={article} />
      <CtaSection article={article} />
    </div>
  )
}

export default ColumnPage