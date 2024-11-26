import styles from './sidebar.module.scss';

export const Sidebar = () => {
  return (
    <nav className={styles.navigate}>
      <ul className={styles.list}>
        <li className={styles.list__item}>1</li>
        <li className={styles.list__item}>2</li>
        <li className={styles.list__item}>3</li>
        <li className={styles.list__item}>4</li>
        <li className={styles.list__item}>5</li>
      </ul>
    </nav>
  );
};
