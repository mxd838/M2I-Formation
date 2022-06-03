function myFunction (a){
    let max = a[0];
    for(let i = 0; i < a.length; i++){
        if ( max < a[i]){
            max = a[i]
        }
    }  
    return max
}

console.log(myFunction([1,2,3]))
console.log(myFunction([10,1000,100]))
console.log(myFunction([-10,-2,-11]))

