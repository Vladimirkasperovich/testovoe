import styles from './tree.module.scss';
import { useGetTreeMutation } from '../../app/services/tree.api.ts';
import { useEffect } from 'react';

export const Tree = () => {
  const [value] = useGetTreeMutation();
  useEffect(() => {
    value({ treeName: 'GUID2' });
  }, []);
  return <div className={styles.main}>Тут будет Дерево</div>;
};
