import { client } from "@/apis";
import { UserPreferencesPutRequest, UserPreferencesPutResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const putUserPreference = async (
  preferences: UserPreferencesPutRequest,
): Promise<UserPreferencesPutResponse> => {
  const response = await client.put<UserPreferencesPutResponse>(
    `/preferences`,
    preferences,
  );
  return response.data;
};

const usePutUserPreference = () => {
  const navigate = useNavigate();

  return useMutation<
    UserPreferencesPutResponse,
    Error,
    UserPreferencesPutRequest
  >({
    mutationFn: putUserPreference,
    onSuccess: () => {
      navigate("/mypage");
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePutUserPreference;
