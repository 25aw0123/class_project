import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchModal.module.css';

const popularKeywords = [
  '基本調味料',
  'アレンジ',
  'インタビュー',
  '心のケア',
  '時短',
  'しょうゆ',
  '特集記事'
];

const SearchModal = ({ onClose }) => {
  const modalRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState('');

  const handleOutsideClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  const handleTagClick = (keyword) => {
    setSearchTerm(keyword);
    setSelectedTag(keyword);
    console.log(`${keyword}`);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onClose();
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    setSearchTerm('');
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOutsideClick} ref={modalRef}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="閉じる">&times;</button>

        <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
          <input type="text" placeholder="キーワードを入力" className={styles.searchInput} value={searchTerm} onChange={handleInputChange} />
          <button className={styles.searchIconBtn} aria-label="検索実行">
            <img className={styles.searchIcon} src='./image/icon_search_orange.svg' alt="検索" />
          </button>
        </form>

        <h3 className={styles.keywordTitle}>よく検索されているキーワード</h3>

        <div className={styles.keywordTags}>
          {popularKeywords.map((keyword, index) => (
            <button key={index} className={`${styles.tagButton} ${selectedTag === keyword ? styles.selected : ''}`} onClick={() => handleTagClick(keyword)}>{keyword}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;