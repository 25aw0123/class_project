import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => { setIsOpen(!isOpen) }

  return (
    <header className={styles.header}>

      <div className={`${styles.headerContent} ${isOpen ? styles.menuOpen : ''}`}>

      <h1><Link to="/" className={styles.logo}><img src="/logo.svg" alt="COOKING note+" width="366" /></Link></h1>

      <button
        type="button"
        className={`${styles.toggleBtn} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="メニュー切り替え"
      >
        <span></span>
        <span></span>
        <p>MENU</p>
      </button>
      </div>

      <nav className={`${styles.slideMenu} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navLinks}>
          <li onClick={toggleMenu}><Link to="/"><img src="/image/icon_house.svg" alt="トップページのホームのアイコン" className={styles.navIcon} />トップ</Link></li>
          <li onClick={toggleMenu}><Link to="/articlepage"><img src="/image/icon_book.svg" alt="記事一覧ページの本のアイコン" className={styles.navIcon} />記事一覧</Link></li>
          <li onClick={toggleMenu}><img src="/image/icon_heart_header.svg" alt="ハートのアイコン" className={`${styles.navIcon} ${styles.favIcon}`} />お気に入り</li>
          <div className={styles.bannerArea}>
          <a href="#" aria-disabled="true" target="_blank" className={styles.bannerLink}>
            <img src="/image/banner_kikkoman.svg" alt="COOKING note+公式サイト" />
          </a>
          <a href="#" aria-disabled="true" target="_blank" className={styles.bannerLink}>
            <img src="/image/banner_homecooking.svg" alt="COOKING note+レシピサイト" />
          </a>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header