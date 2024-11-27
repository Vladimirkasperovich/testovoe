import { FC, JSX, useState } from 'react';
import { TreeNode } from '../../types/tree.types.ts';
import { Node } from '../node/node.tsx';

interface Props {
  node: TreeNode;
}

export const Tree: FC<Props> = ({ node }) => {
  const [visibleNodes, setVisibleNodes] = useState<Record<number, boolean>>({});

  const toggleVisibility = (id: number) => {
    setVisibleNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderTree = (currentNode: TreeNode): JSX.Element => {
    const isVisibleChild = visibleNodes[currentNode.id] || false;
    return (
      <div key={currentNode.id}>
        <Node
          currentNode={currentNode}
          isVisibleChild={isVisibleChild}
          toggleVisibility={toggleVisibility}
        />
        {isVisibleChild &&
          currentNode.children?.map((child) => renderTree(child))}
      </div>
    );
  };

  return <div>{renderTree(node)}</div>;
};
