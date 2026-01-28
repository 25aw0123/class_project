import styles from './CtaSection.module.css';
import TryCtaBtn from '../../components/Btn/TryCtaBtn/TryCtaBtn';
import KnowCtaBtn from '../../components/Btn/KnowCtaBtn/KnowCtaBtn';

const CtaSection = () => {
  return (
    <section className={styles.ctaBackground}> 
      
      <div className={styles.cardWrapper}>
      <KnowCtaBtn />
      <TryCtaBtn />
      </div>
    </section>
  );
};

export default CtaSection;