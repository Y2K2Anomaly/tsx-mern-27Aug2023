import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starWarriorsApi = createApi({
    reducerPath: 'starWarriorsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),

    endpoints: (builder) => ({

        getStarWarriors: builder.query({
            query: () => {
                return {
                    url: 'people',
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            }
        }),
        getStarWarrior: builder.query({
            query: (count) => {
                return {
                    url: `people/${count}`,
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            }
        }),
        getHomeworld: builder.query({
            query: (url) => {
                return {
                    url: url,
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            }
        }),
        getSpecie: builder.query({
            query: (url) => {
                return {
                    url: url,
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            }
        }),
    })
})

export const { useGetStarWarriorsQuery, useGetStarWarriorQuery, useGetHomeworldQuery, useGetSpecieQuery, useGetNewPageDataQuery } = starWarriorsApi;