import { useState } from 'react';
import styles from './SearchBtn.module.css';
import SearchModal from '../../../articles/SearchModal/SearchModal';

const SearchBtn = () => {

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const openModal = () => setIsSearchModalOpen(true);
  const closeModal = () => setIsSearchModalOpen(false);

  const handleSearchClick = () => {
    openModal();
  };

  return (
    <div className={styles.searchArea}>
      <p className={styles.searchText}>
        <span className={styles.char1}>記</span>
        <span className={styles.char2}>事</span>
        <span className={styles.char3}>を</span>
        <span className={styles.char4}>さ</span>
        <span className={styles.char5}>が</span>
        <span className={styles.char6}>す</span>
      </p>
      <button className={styles.searchButton} aria-label="記事を検索" onClick={handleSearchClick}>
        <img className={styles.searchIcon} src='./image/icon_search.svg' alt="検索" />
      </button>

      {isSearchModalOpen && <SearchModal onClose={closeModal} />}
    </div>
  );
};

export default SearchBtn