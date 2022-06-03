/**
 * Renvoie la valeur la plus proche de zéro
 * À valeurs égales entre des nombres positifs et négatifs, c'est la valeur négative qui est renvoyée
 * @param  {...any} temps 
 * @returns {number}
 */
function tempCloserToZero(...temps){
    let differenceMin
    if (temps.length !== 0){
        differenceMin = temps[0] 
    }
    for (temp of temps){
        // console.log(temp)
        if (Math.abs(differenceMin) > Math.abs(temp)){
            differenceMin = temp
        }
    }
    for (temp of temps){
        
        if (Math.abs(differenceMin) === Math.abs(temp) && temp < 0){
            differenceMin = temp
        }
    }
    
    return differenceMin
}




console.log(`La température la plus proche de 0 degré est ${tempCloserToZero(12,25,5,7,6,-5)}`)

console.log(`La température la plus proche de 0 degré est ${tempCloserToZero(-9, 18, -8, 8, 12, -12, 48)}`)
