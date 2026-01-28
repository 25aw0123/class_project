import { useState, useEffect } from "react";
import styles from './LikeButton.module.css';

const LikeButton = ({ articleId }) => {

  const KEY = `liked_status_${articleId}`;

  const [liked, setLiked] = useState(() => {
    const storedValue = localStorage.getItem(KEY);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return false; 
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(liked));
  }, [liked, KEY]);

  const toggleLiked = (e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); };

  return (
    <button className={`${styles.likeBtn} ${liked ? styles.isLiked : ''}`} onClick={toggleLiked} type="button">
      <svg viewBox="0 0 30 28" className={styles.heartIcon}>
        <path d="M7.62012 1.29688C7.91476 1.23616 8.21845 1.23457 8.51172 1.29199L8.58789 1.30664L8.66504 1.3125C9.56163 1.37534 10.4194 1.59698 11.2451 1.9834C12.2335 2.44609 13.0839 3.09567 13.8027 3.94141L14.7549 5.06152L15.707 3.94141C16.426 3.09558 17.2762 2.44608 18.2646 1.9834C19.2511 1.52173 20.2839 1.292 21.376 1.29199C23.3699 1.29201 24.9711 1.94673 26.2676 3.24316C27.564 4.53966 28.2187 6.14101 28.2188 8.13477L28.2109 8.50293C28.1747 9.35974 28.0118 10.2013 27.7197 11.0303C27.3943 11.9538 26.7998 13.0251 25.8906 14.249C24.9823 15.4717 23.7392 16.8779 22.1475 18.4697C20.5494 20.0678 18.5188 21.9774 16.0518 24.2002L14.7549 25.3623L13.457 24.2002H13.458C10.991 21.9774 8.96036 20.0678 7.3623 18.4697C5.77068 16.8781 4.52839 15.4716 3.62012 14.249C2.71091 13.0251 2.11545 11.9538 1.79004 11.0303C1.45628 10.0828 1.29106 9.11913 1.29102 8.13477C1.29102 8.07174 1.29347 8.01482 1.2959 7.91602L1.29883 7.7998L1.2793 7.68359C1.20566 7.23275 1.27076 6.76651 1.4668 6.35254L1.51465 6.25195L1.54395 6.14355C1.83933 5.05109 2.39693 4.08846 3.24219 3.24316C4.3975 2.08785 5.78663 1.45038 7.46484 1.31836L7.54297 1.3125L7.62012 1.29688Z" />
      </svg>
    </button>
  )
}

export default LikeButton