import styles from './CtaSection.module.css';
import TryCtaBtn from '../../components/Btn/TryCtaBtn/TryCtaBtn';

const CtaSection = () => {
    return (
        <section className={styles.background}>
            <div className={styles.ctaBackground}>
                <div className={styles.cardWrapper}>
                    <TryCtaBtn />
                </div>
            </div>
        </section>
    );
};

export default CtaSection;