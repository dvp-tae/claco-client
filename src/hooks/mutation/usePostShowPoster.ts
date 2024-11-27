import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export type ShowPosterUrlRequest = {
  image_url: string;
};

export type ShowPosterUrlResponse = {
  message: string;
  s3_url: string;
};

const postShowPoster = async (
  imageUrl: ShowPosterUrlRequest,
): Promise<ShowPosterUrlResponse> => {
  const response = await axios.post(
    `${import.meta.env.VITE_TICKET_SERVER_URL}`,
    imageUrl,
    {
      headers: {
        "Access-Control-Allow-Origin": "http://43.203.228.177:5000",
        "Content-Type": "application/json",
      },
    },
  );

  return response.data;
};

const usePostShowPoster = () => {
  return useMutation<ShowPosterUrlResponse, Error, ShowPosterUrlRequest>({
    mutationFn: postShowPoster,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostShowPoster;
