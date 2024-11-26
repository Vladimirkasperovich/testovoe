export interface Tree {
  id: number;
  name: string;
  children: Children[];
}

type Children = Tree[];
export type GetTreeRequest = {
  treeName: string;
};
