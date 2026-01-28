import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>

                <div className={styles.logoArea}>
                   <img src="./logo.svg" alt="Logo" className={styles.pcLogo} />
                </div>

            <ul className={styles.mainNav}>
                <li><Link to="/">トップ</Link></li>
                <li><Link to="/articlepage">記事一覧</Link></li>
            </ul>

            <div className={styles.bannerArea}>
                <a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer" className={styles.bannerLink}>
                    <img src="./image/banner_kikkoman.svg" alt="キッコーマン公式サイト" />
                </a>
                <a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer" className={styles.bannerLink}>
                    <img src="./image/banner_homecooking.svg" alt="キッコーマンホームクッキングレシピサイト" />
                </a>
            </div>

            <ul className={styles.infoNav}>
                <li><a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer">商品情報</a></li>
                <li><a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer">利用規約</a></li>
                <li><a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a></li>
            </ul>

            <div className={styles.snsArea}>
                <p className={styles.snsLabel}>Follow Us</p>
                <div className={styles.snsIcons}>
                <a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer"><img src="./image/logo_fb.svg" alt="Facebook" /></a>
                <a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer"><img src="./image/logo_ig.svg" alt="Instagram" /></a>
                <a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer"><img src="./image/logo_x.svg" alt="X" /></a>
                <a href="#" aria-disabled="true" target="_blank" rel="noopener noreferrer"><img src="./image/logo_yt.svg" alt="YouTube" /></a>
                </div>
            </div>

            <p className={styles.copyright}>© 2025 COOKING note+.</p>
        </div>
        </footer>
    )
}

export default Footer