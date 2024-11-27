import { FC, JSX, useState } from 'react';
import { TreeNode } from '../../types/tree.types.ts';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

interface Props {
  node: TreeNode;
}

export const Tree: FC<Props> = ({ node }) => {
  const [visibleNodes, setVisibleNodes] = useState<Record<string, boolean>>({});

  const toggleVisibility = (id: string) => {
    setVisibleNodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderTree = (currentNode: TreeNode): JSX.Element => {
    const isVisibleChild = visibleNodes[currentNode.id] || false;

    return (
      <div key={currentNode.id} style={{ marginLeft: '30px' }}>
        <div style={{ display: 'flex', columnGap: '10px' }}>
          {currentNode.children?.length ? (
            isVisibleChild ? (
              <ExpandLessTwoToneIcon
                fontSize="small"
                onClick={() => toggleVisibility(String(currentNode.id))}
              />
            ) : (
              <ExpandMoreTwoToneIcon
                fontSize="small"
                onClick={() => toggleVisibility(String(currentNode.id))}
              />
            )
          ) : null}
          {currentNode.name}
          <AddCircleOutlineTwoToneIcon
            fontSize="small"
            onClick={() => alert('Add node')}
          />
          <EditTwoToneIcon
            fontSize="small"
            onClick={() => alert('Edit node')}
          />
          <DeleteForeverTwoToneIcon
            fontSize="small"
            onClick={() => alert('Remove node')}
          />
        </div>
        {isVisibleChild &&
          currentNode.children?.map((child) => renderTree(child))}
      </div>
    );
  };

  return <div>{renderTree(node)}</div>;
};
