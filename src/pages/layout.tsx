import { Header, Sidebar, Tree } from '../components';
import styles from './layout.module.scss';
import { useGetTreeMutation } from '../app/services/tree.api.ts';
import { useEffect } from 'react';

export const Layout = () => {
  const [getTree, { data }] = useGetTreeMutation();
  useEffect(() => {
    getTree({ treeName: '%7BC9232B85-AD10-459C-A44F-70CA30C60E5F%7D' });
  }, [getTree]);
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        {data ? <Tree node={data} /> : <div>...Loading</div>}
      </div>
    </div>
  );
};
