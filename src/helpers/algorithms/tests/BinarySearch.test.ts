import { BinarySearch, BinarySearchNotObjects } from "../BinarySeatch";
const sortedArr =[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
    {id:9},
    {id:10},
]
const sortedArrEl =[1,2,3,4,5,6,7,8,9,10] 
describe("test binary search",()=>{
    test("binary Search",()=>{
        const index = BinarySearch(sortedArr, 6);
        expect(index).toBe(5)
    })
    test("empty binary Search",()=>{
        const index = BinarySearch([], 6);
        expect(index).toBe(-1)
    })
    test("binary Search with wrong type",()=>{
        const index = BinarySearch(sortedArr, "6");
        expect(index).toBe(-1)
    })
    test("binary Search not object",()=>{
        const index = BinarySearchNotObjects(sortedArrEl, 6);
        expect(index).toBe(5)
    })
    test("empty binary Search not object",()=>{
        const index = BinarySearchNotObjects([], 6);
        expect(index).toBe(-1)
    })
    test("binary Search not object with wrong type",()=>{
        const index = BinarySearchNotObjects(sortedArrEl, "6");
        expect(index).toBe(-1)
    })
})