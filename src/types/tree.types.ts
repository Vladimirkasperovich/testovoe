export interface TreeNode {
  id: number;
  name: string;
  children: TreeNode[];
}

export type GetTreeRequest = {
  treeName: string;
};
