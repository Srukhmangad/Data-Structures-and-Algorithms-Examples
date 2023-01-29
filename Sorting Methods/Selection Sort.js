function swap(x,y,arr){
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}

function selectionSort(arr){
    var i, j, min;
    for(i=0; i<arr.length-1; i++){
        min = i
        for(j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        swap(min,i,arr)
    }
    return arr
}

const a = [3,5,15,1,45,87,11]

console.log(selectionSort(a))