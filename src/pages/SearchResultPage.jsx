import { useSearchParams, Link } from 'react-router-dom';
import styles from './SearchResultPage.module.css';
import SearchBtn from "../components/Btn/SearchBtn/SearchBtn";
import ArticleCard from '../components/ArticleCard/ArticleCard';

const SearchResultPage = () => {
    const [searchParams] = useSearchParams();
    const tagName = searchParams.get('tag');
    const query = searchParams.get('q');

    const Articles = [
        { id: 1, tags: ['鶏肉', '下ごしらえ', 'てりやき'], type: 'Technique', title: '基本の肉じゃがから学ぶ、味の足し算・引き算の法則', category: 'テクニック・知識', img: './image/article/homecook_tsushin_tec_251201_main.jpg', tagColor: '#00A9AE' },
        { id: 2, tags: ['しょうゆ', 'カレー', 'インタビュー', '自炊'], type: 'Interview', title: '平日の夜をどう乗り切る？料理家さんのリアルな習慣', category: 'インタビュー', img: './image/article/homecook_tsushin_int_251120_main.jpeg', tagColor: '#7097D3' },
        { id: 3, tags: ['しょうゆ', 'インタビュー'], type: 'Interview', title: '料理家が語る「私が疲れた日に、自分のために作るもの」', category: 'インタビュー', img: './image/article/homecook_tsushin_int_251210_main.jpeg', tagColor: '#7097D3' },
        { id: 4, tags: ['魚', 'フライパン'], type: 'Technique', title: '魚の部位の選び方・使い分け方。おすすめレシピも！', category: 'テクニック・知識', img: './image/article/homecook_tsushin_tec_251101_main.jpg', tagColor: '#00A9AE' },
        { id: 5, tags: ['野菜'], type: 'Technique', title: '火加減でここまで変わる！料理がまとまるシンプルなコツ', category: 'テクニック・知識', img: './image/article/homecook_tsushin_tec_251120_main.jpg', tagColor: '#00A9AE' },
        { id: 6, tags: ['しょうゆ', 'インタビュー'], type: 'Interview', title: '迷ったとき、料理家さんがチェックしているのはここ', category: 'インタビュー', img: './image/article/homecook_tsushin_int_251101_main.jpeg', tagColor: '#7097D3' },
    ];

    const filteredResults = Articles.filter(article => {
        if (tagName) {
            return article.tags.includes(tagName);
        }
        if (query) {
            return article.title.includes(query) ||
                article.tags.includes(query);
        }
        return true;
    });

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.mainTitle}>検索結果<span className={styles.subTitle}>Search Results</span></h1>
                <div className={styles.searchIcon}><SearchBtn /></div>
            </header>

            <main className={styles.result}>
                <p className={styles.resultCount}>
                    「<span className={styles.tagName}>{tagName || query}</span>」の検索結果：
                    <span className={styles.countNum}>{filteredResults.length}</span> 件
                </p>
                <div className={styles.grid}>
                    {filteredResults.length > 0 ? (
                        filteredResults.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))
                    ) : (
                        <div className={styles.noResult}>
                            <p>条件に一致する記事が見つかりませんでした。</p>
                            <p>もう一度お試しください。</p>
                        </div>
                    )}
                </div>
            </main>

            <footer className={styles.footer}>
                <button className={styles.backBtn}>
                    <Link to="/articlepage" className={styles.backToListBtn}>記事一覧へ戻る</Link>
                </button>
                <nav className={styles.breadcrumb}>
                    <Link to="/" className={styles.breadcrumbLink}>トップ</Link><span className={styles.breadcrumbArrow}>〉</span>
                    <Link to="/articlepage" className={styles.breadcrumbLink}>記事一覧</Link><span className={styles.breadcrumbArrow}>〉</span>
                    <span className={styles.breadcrumbTitle}>検索結果</span>
                </nav>
            </footer>
        </div>
    );
};

export default SearchResultPage