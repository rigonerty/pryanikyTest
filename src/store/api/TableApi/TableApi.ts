import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITable,IReturnedData,IAddTable } from './types';




export const tableApi = createApi({
    reducerPath:"tableApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.HOST
    }),
    endpoints:(build)=> ({

        getTables: build.query<IReturnedData<ITable[]>,any>({
            query:()=>({
                url:"/ru/data/v3/testmethods/docs/userdocs/get" ,
                method:"GET",
                headers: {"x-auth":localStorage.getItem("token")||""}
            })
        }),
        addTable: build.mutation<IReturnedData<ITable>,IAddTable>({
            query:(body)=>({
                url:"/ru/data/v3/testmethods/docs/userdocs/create" ,
                method:"POST",
                body,
                headers: {"x-auth":localStorage.getItem("token")||""}
            })
        }),
        deleteTable: build.mutation<IReturnedData<null>,string>({
            query:(id)=>({
                url:`/ru/data/v3/testmethods/docs/userdocs/delete/${id}` ,
                method:"POST",
                headers: {"x-auth":localStorage.getItem("token")||""}
            })
        }),
        updateTable: build.mutation<IReturnedData<ITable>,ITable>({
            query:({id,...body})=>({
                url:`/ru/data/v3/testmethods/docs/userdocs/set/${id}` ,
                method:"POST",
                headers: {"x-auth":localStorage.getItem("token")||""},
                body:{...body}
            })
        }),
    }),
})

export const {useAddTableMutation,useLazyGetTablesQuery,useDeleteTableMutation,useUpdateTableMutation} = tableApi