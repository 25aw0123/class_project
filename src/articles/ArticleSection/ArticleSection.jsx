import { useState } from 'react';
import styles from './ArticleSection.module.css';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

const Articles = [
  { id: 1, tag: 'Technique', title: '基本の肉じゃがから学ぶ、味の足し算・引き算の法則', category: 'テクニック・知識', img: './image/article/homecook_tsushin_tec_251201_main.jpg', tagColor: '#00A9AE' },
  { id: 2, tag: 'Interview', title: '平日の夜をどう乗り切る？料理家さんのリアルな習慣', category: 'インタビュー', img: './image/article/homecook_tsushin_int_251120_main.jpeg', tagColor: '#7097D3' },
  { id: 3, tag: 'Interview', title: '料理家が語る「私が疲れた日に、自分のために作るもの」', category: 'インタビュー', img: './image/article/homecook_tsushin_int_251210_main.jpeg', tagColor: '#7097D3' },
  { id: 4, tag: 'Technique', title: '魚の部位の選び方・使い分け方。おすすめレシピも！', category: 'テクニック・知識', img: './image/article/homecook_tsushin_tec_251101_main.jpg', tagColor: '#00A9AE' },
  { id: 5, tag: 'Technique', title: '火加減でここまで変わる！料理がまとまるシンプルなコツ', category: 'テクニック・知識', img: './image/article/homecook_tsushin_tec_251120_main.jpg', tagColor: '#00A9AE' },
  { id: 6, tag: 'Interview', title: '迷ったとき、料理家さんがチェックしているのはここ', category: 'インタビュー', img: './image/article/homecook_tsushin_int_251101_main.jpeg', tagColor: '#7097D3' },
];

const tabs = ['すべて', 'テクニック・知識', 'インタビュー'];
const tabColors = {
  'すべて': '#F7AE41',
  'テクニック・知識': '#00A9AE',
  'インタビュー': '#7097D3',
};

const ArticleSection = () => {
  const [activeTab, setActiveTab] = useState('すべて');

  const filteredArticles = Articles.filter(article => {
    if (activeTab === 'すべて') {
      return true;
    }
    return article.category === activeTab;
  });

  const getTabButtonStyle = (tabName) => {
    const isSelected = activeTab === tabName;
    const themeColor = tabColors[tabName];
    return {
      backgroundColor: isSelected ? themeColor : 'transparent',
      borderColor: isSelected ? themeColor : '#F2E6D5',
      color: isSelected ? '#fff' : '#473D34',
    };
  };

  return (
    <section className={styles.articleSection}>
      <h2 className={styles.sectionHeader}>記事一覧<span className={styles.sectionSubtitle}>Articles</span></h2>

      <div className={styles.tabNavigation} style={{ borderBottomColor: tabColors[activeTab] }}>
        {tabs.map(tab => {
          const isSelected = activeTab === tab;

          return (
            <button
              key={tab}
              className={`${styles.tabButton} ${isSelected ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab)}
              style={getTabButtonStyle(tab)}> {tab}
            </button>
          );
        })}
      </div>

      <div className={styles.articleGrid}>
        {filteredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className={styles.pagination}>
        <span className={styles.navArrow}>←</span>
        <span className={`${styles.pageNumber} ${styles.currentPage}`}>1</span>
        <span className={styles.navArrow}>→</span>
      </div>
    </section>
  );
};

export default ArticleSection