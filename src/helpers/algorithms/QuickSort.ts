interface IArrEl{
    id:string|number;
}

export function QuickSort(arr:IArrEl[]):any[]{
    if(arr.length <= 1){
        return arr
    }
    const pivot = Math.round(arr.length/2)
    const less = []
    const greater = []
    for(let i = 0; i<arr.length; i++){
        if(i === pivot)
            continue
        if(arr[i].id< arr[pivot].id){
            less.push(arr[i])
        }else{
            greater.push(arr[i])
        }
    }
    return [...QuickSort(less), arr[pivot], ...QuickSort(greater)]
}
export function QuickSortNotObject(arr:(string[])|(number[])):any[]{
    if(arr.length <= 1){
        return arr
    }
    const pivot = Math.round(arr.length/2)
    const less:any[] = []
    const greater:any[]= []
    for(let i = 0; i<arr.length; i++){
        if(i === pivot)
            continue
        if(arr[i]< arr[pivot]){
            less.push(arr[i])
        }else{
            greater.push(arr[i])
        }
    }
    return [...QuickSortNotObject(less), arr[pivot], ...QuickSortNotObject(greater)]
}