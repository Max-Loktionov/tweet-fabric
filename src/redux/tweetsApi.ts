import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../assets/interfaces";

const BASE_URL = "https://6439993fbd3623f1b9a428c7.mockapi.io/api/v1";

export const tweetsApi = createApi({
  reducerPath: "tweetsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Tweets"],
  refetchOnMountOrArgChange: true,

  endpoints: (builder) => ({
    getTweets: builder.query<IUser[] | undefined, void>({
      query: () => `/user`,
      providesTags: ["Tweets"],
    }),
    updateFollowing: builder.mutation({
      query: (object) => {
        console.log("objApi", object);
        return {
          url: `/user/${object.id}`,
          method: "PUT",
          body: object,
        };
      },
      invalidatesTags: ["Tweets"],
    }),
  }),
});

export const { useGetTweetsQuery, useUpdateFollowingMutation } = tweetsApi;
