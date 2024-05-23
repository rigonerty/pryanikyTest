
interface IArrEl{
    id:string|number;
}

export const BinarySearch = (arr:IArrEl[],id:string|number)=>{
    if(typeof arr[0]?.id !== typeof id) return -1
    let start = 0;
    let end = arr.length - 1;
    let count = 0 
    while(start<= end){
        let middle = Math.round((start+end)/2)
        if(arr[middle].id>id) end = middle - 1;
        if(arr[middle].id<id) start = middle + 1;
        if(arr[middle].id===id) return middle
        count++
    }
    return -1
}
export const BinarySearchNotObjects = (arr:string[]|number[],el:string|number)=>{
    if(typeof arr[0] !== typeof el) return -1
    let start = 0;
    let end = arr.length - 1;
    let count = 0 
    while(start<= end){
        let middle = Math.round((start+end)/2)
        if(arr[middle]>el) end = middle - 1;
        if(arr[middle]<el) start = middle + 1;
        if(arr[middle]===el) return middle
        count++
    }
    return -1
}