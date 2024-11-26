import styles from './tree.module.scss';

import { useEffect } from 'react';
import { useGetTreeMutation } from '../../app/services/tree.api.ts';

export const Tree = () => {
  const [value, { data }] = useGetTreeMutation();
  useEffect(() => {
    value({ treeName: 'GUID' });
  }, []);
  return <div className={styles.main}>{data?.name}</div>;
};
