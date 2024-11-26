import { Header, Sidebar } from '../components';
import styles from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
      </div>
    </div>
  );
};
