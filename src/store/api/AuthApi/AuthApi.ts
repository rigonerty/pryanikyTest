import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILogin, IReturnedData } from './types';




export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.HOST
    }),
    endpoints:(build)=> ({

        login: build.mutation<IReturnedData,ILogin>({
            query:(data)=>({
                url:"/ru/data/v3/testmethods/docs/login",
                method:"POST",
                body:data,
            })
        }),

    }),
})

export const {useLoginMutation} = authApi