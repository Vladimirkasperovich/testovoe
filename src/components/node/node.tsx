import styles from './node.module.scss';
import { TreeNode } from '../../types/tree.types.ts';
import { FC } from 'react';

interface Props {
  node: TreeNode;
}
export const Node: FC<Props> = ({ node }) => {
  return <div className={styles.main}>{node.name}</div>;
};
