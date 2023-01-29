function binarySearch(arr, num){
            var start = 0, end = arr.length - 1;

            while(start<=end){
                let mid = Math.floor((start+end)/2);
                 let midValue = arr[mid];
                 if(num==midValue){
                    return true;
                 }
                 else if(num<midValue){
                    end = mid-1;
                 }
                 else{
                    start = mid+1;
                 }
            }
            return false; 
        }
        arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
        
        console.log(binarySearch(arr,12));
        console.log(binarySearch(arr,0));
        console.log(binarySearch(arr,40));
        console.log(binarySearch(arr,-10));