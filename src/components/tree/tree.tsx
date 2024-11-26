import styles from './tree.module.scss';

import { useEffect } from 'react';
import { useGetTreeMutation } from '../../app/services/tree.api.ts';

export const Tree = () => {
  const [getTree, { data }] = useGetTreeMutation();
  useEffect(() => {
    getTree({ treeName: 'GUIDS' });
  }, []);
  return <div className={styles.main}>{data?.name}</div>;
};
