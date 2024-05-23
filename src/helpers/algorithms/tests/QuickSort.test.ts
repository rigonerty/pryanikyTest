import {QuickSort,QuickSortNotObject} from "../QuickSort"


const notSortedArrWithId=[
    {id:5},
    {id:1},
    {id:3},
    {id:6},
    {id:9},
    {id:8},
    {id:10},
    {id:7},
    {id:2},
    {id:4},
]
const notSortedArrWithoutId=[5,1,3,6,9,8,10,7,2,4]
describe("test Quick sort", ()=>{
    test("quick sort with id",()=>{
        const arr = QuickSort(notSortedArrWithId)
        expect(arr).toEqual([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},])
    })
    test("empty quick sort with id",()=>{
        const arr = QuickSort([])
        expect(arr).toEqual([])
    })
    test("quick sort without id",()=>{
        const arr = QuickSortNotObject(notSortedArrWithoutId)
        expect(arr).toEqual([1,2,3,4,5,6,7,8,9,10,])
    })
    test("empty quick sort without id",()=>{
        const arr = QuickSortNotObject([])
        expect(arr).toEqual([])
    })
})