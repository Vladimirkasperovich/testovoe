import { baseApi } from './api.ts';
import { GetTreeRequest, Tree } from '../../types/tree.types.ts';

export const treeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTree: builder.mutation<Tree, GetTreeRequest>({
      query: (body) => ({
        method: 'Post',
        url: `/api.user.tree.get?treeName=${body.treeName}`,
      }),
    }),
  }),
});

export const { useGetTreeMutation } = treeApi;
