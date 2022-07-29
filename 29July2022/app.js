function sort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<i; j++){
            if(arr[i]<arr[j]){
                let x=arr[i];
                arr[i]=arr[j];
                
                
                arr[j]=x;
            }
        }
    }
    return arr;
}
console.log(sort([34,67,12,90,43,67]));





function sort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<i; j++){
            if(arr[i]>arr[j]){
                let x=arr[i];
                arr[i]=arr[j];
                
                
                arr[j]=x;
            }
        }
    }
    return arr;
}
console.log(sort([34,67,12,90,43,67]));