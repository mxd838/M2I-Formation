console.log(process.argv)

let sum = 0
for (let i = 0; i < process.argv; i++){
    console.log(process.argv[i])
    sum += Number(process.argv[i])
}

console.log(sum)