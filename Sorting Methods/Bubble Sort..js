function swap(x,y,arr){
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}
function bubbbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                swap(j,j+1,arr);
            }
        }
    }
    return arr;
}

arr= [2,5,3,76,4,2,65,843,2,1];
console.log(bubbbleSort(arr));
