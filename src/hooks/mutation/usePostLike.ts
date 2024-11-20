import { client } from "@/apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type Like = {
  likeId: number;
  liked: boolean;
};

const postLike = async (concertId: number) => {
  const response = await client.post(`/concerts/likes/${concertId}`, {});
  return response.data;
};

const usePostLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postLike,
    onSuccess: (_, likeId) => {
      const allLikes = queryClient.getQueryData<Like[]>(["likes"]);
      const updatedLikes = allLikes?.map((like) =>
        like.likeId === likeId ? { ...like, liked: !like.liked } : like,
      );
      queryClient.setQueryData(["likes"], updatedLikes);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostLike;
