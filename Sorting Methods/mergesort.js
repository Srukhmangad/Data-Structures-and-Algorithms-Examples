function merge(sorted, start, mid, end)
{
    var m1 = mid - start + 1;
    var m2 = end - mid;
 
   
    var arr1 = new Array(m1);
    var arr2 = new Array(m2);
 
    for (var i = 0; i < m1; i++)
        arr1[i] = sorted[start + i];
    for (var j = 0; j < m2; j++)
        arr2[j] = sorted[mid + 1 + j];
  
  
    var p1= 0;
    var p2 = 0;
    var k = start;
 
    while (p1< m1 && p2< m2) {
        if (arr1[p1] <= arr2[p2]) {
            sorted[k] = arr1[p1];
            p1++;
        }
        else {
            sorted[k] = arr2[p2];
            p2++;
        }
        k++;
    }
 
 
    while (p1 < m1) {
        sorted[k] = arr1[p1];
        p1++;
        k++;
    }
 
    while (p2 < m2) {
        sorted[k] = arr2[p2];
        p2++;
        k++;
    }
}
 

function mergeSort(arr,start, end){
    if(start>=end){
        return;
    }
    var mid =start+ parseInt((end-start)/2);
      mergeSort(arr,start,mid);
      mergeSort(arr,mid+1,end);
      merge(arr,start,mid,end);
}
 
    var arr = [ 12, 11, 13, 5, 6, 7 ];
    var n = arr.length;
    mergeSort(arr, 0, n - 1);
  
   for (var i = 0; i < n; i++)
       console.log(arr[i] + " ");
    console.log(arr)
