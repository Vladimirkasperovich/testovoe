import { baseApi } from './api.ts';
import { GetTreeRequest, TreeNode } from '../../types/tree.types.ts';

export const treeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTree: builder.mutation<TreeNode, GetTreeRequest>({
      query: (body) => ({
        method: 'Post',
        url: `/api.user.tree.get?treeName=${body.treeName}`,
      }),
    }),
  }),
});

export const { useGetTreeMutation } = treeApi;
