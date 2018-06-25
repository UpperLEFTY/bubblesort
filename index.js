// Solution 1

function bubblesort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]


// Solution 2

function bubbleSort(arr){
   var len = arr.length;
  for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
          arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
