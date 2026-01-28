import SearchBtn from "../../components/Btn/SearchBtn/SearchBtn";
import styles from './SlideSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const articles = [
  { id: 1, tag: 'Technique', title: '基本の肉じゃがから学ぶ、味の足し算・引き算の法則', img: '/image/article/homecook_tsushin_tec_251201_main.jpg'},
  { id: 2, tag: 'Interview', title: '平日の夜をどう乗り切る？料理家さんのリアルな習慣', img: '/image/article/homecook_tsushin_int_251120_main.jpeg' },
  { id: 3, tag: 'Interview', title: '料理家が語る「私が疲れた日に、自分のために作るもの」', img: '/image/article/homecook_tsushin_int_251210_main.jpeg' },
  { id: 4, tag: 'Technique', title: '魚の部位の選び方・使い分け方。おすすめレシピも！', img: '/image/article/homecook_tsushin_tec_251101_main.jpg'},
  { id: 5, tag: 'Technique', title: '火加減でここまで変わる！料理がまとまるシンプルなコツ', img: '/image/article/homecook_tsushin_tec_251120_main.jpg'},
  { id: 6, tag: 'Interview', title: '迷ったとき、料理家さんがチェックしているのはここ', img: '/image/article/homecook_tsushin_int_251101_main.jpeg'},
];

const TAG_COLORS = {
  Technique: { color: '#00A9AE', background: 'rgba(255, 255, 255, 0.8)' },
  Interview: { color: '#7097D3', background: 'rgba(255, 255, 255, 0.8)' },
};

const SlideSection = () => {

  const tagStyles = (tag) => {
    return TAG_COLORS[tag] || { color: '#473D34', background: 'rgba(255, 255, 255, 0.8)' };
  };

  return (
    <section className={styles.slideSection}>
      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.4}
          spaceBetween={20}
          breakpoints={{ 600: { slidesPerView: 2.5, spaceBetween: 30, }, 1024: { slidesPerView: 2.8, spaceBetween: 60, }, }}
          loop={true}
          navigation={{ nextEl: `.${styles.swiperButtonNext}`, prevEl: `.${styles.swiperButtonPrev}`, }}
          centeredSlides={true}
          className={styles.articleSwiper}
        > {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className={styles.cardContainer}>
              <a href={`/article/${article.id}`} className={styles.cardLink}>
                <div className={styles.imageBox}>
                  <img src={article.img} alt={article.title} className={styles.cardImage} />
                </div>
                <span className={styles.tag} style={{ color: tagStyles(article.tag).color, backgroundColor: tagStyles(article.tag).background }}>
                  <span className={styles.tagDot} style={{ backgroundColor: tagStyles(article.tag).color }}></span>{article.tag}
                </span>
                <h3 className={styles.cardTitle}>{article.title}</h3>
              </a>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>

      <div className={styles.navigation}>
        <button className={`${styles.navButton} ${styles.swiperButtonPrev}`}>
          <span className={styles.arrow}>〈</span> PREV
        </button>
        <button className={`${styles.navButton} ${styles.swiperButtonNext}`}>
          NEXT <span className={styles.arrow}>〉</span>
        </button>
      </div>

      <SearchBtn />
    </section>
  );
};

export default SlideSection