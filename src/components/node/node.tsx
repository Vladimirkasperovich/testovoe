import { TreeNode } from '../../types/tree.types.ts';
import { FC } from 'react';
import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

interface Props {
  currentNode: TreeNode;
  isVisibleChild: boolean;
  toggleVisibility: (id: number) => void;
}

export const Node: FC<Props> = ({
  currentNode,
  isVisibleChild,
  toggleVisibility,
}) => {
  return (
    <div style={{ marginLeft: '30px' }}>
      <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
        {currentNode.children?.length ? (
          isVisibleChild ? (
            <ExpandLessTwoToneIcon
              fontSize="small"
              onClick={() => toggleVisibility(currentNode.id)}
            />
          ) : (
            <ExpandMoreTwoToneIcon
              fontSize="small"
              onClick={() => toggleVisibility(currentNode.id)}
            />
          )
        ) : null}
        <h4>{currentNode.name}</h4>
        {isVisibleChild && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
