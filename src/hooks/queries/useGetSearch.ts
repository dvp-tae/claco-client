import { client } from "@/apis";
import { GetConcertListResponse, GetSearchProps } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

const getSearch = async ({
  query,
  page,
  size = 9,
}: GetSearchProps): Promise<GetConcertListResponse> => {
  const response = await client.get<GetConcertListResponse>(
    "/concerts/queries",
    {
      params: {
        query: query,
        page: page,
        size: size,
      },
    }
  );
  return response.data;
};

const useGetSearch = ({
  query,
  page,
  size,
}: GetSearchProps): UseQueryResult<GetConcertListResponse, AxiosError> => {
  return useQuery<GetConcertListResponse, AxiosError>({
    queryKey: ["search-concert-data", query, page],
    queryFn: () => getSearch({ query, page, size }),
  });
};

export default useGetSearch;

/**
 * No description
 *
 * @tags useGetSearch
 * @name concert-controller
 * @summary 검색 API
 * @request GET:/concerts/queries
 * @secure bearer
 */
