//ETAPE 1 - DECOUPER LA CHAINE 
function sliceString(string){
    let result = ""
    let charGroup = string[0] // qui stockera les groupes de caractères identiques, initialisation avec le premier caractère

    for(let i = 1 ; i <string.length ; i++){ // Boucle qui compare un caractère au précédent
        if(string[i] === string[i-1]) {
            charGroup += string[i]
        } else {
            result += charGroup + " "
            charGroup = string[i] // on réinitialise le caractère à comparer avec le nouveau caractère
        }
    }

    result += charGroup

    return result   
}
console.log("------- ETAPE 1 -------");
console.log(sliceString("hola"));
console.log(sliceString("abcc"));
console.log(sliceString("aabbca"));

//ETAPE 2 - DECRIRE LA CHAINE 

function describeString(string){
    let result = ""
    let count = 1 

    for(let i = 1 ; i <string.length ; i++){
        if(string[i] === string[i-1]) {
            count++
        } else {
            result += count + string[i-1]
            count = 1
        }
    }

    return result += count + string[string.length - 1] // on ajoute le dernier groupe (compteur + caractère) à la fin du résultat

}
console.log("------- ETAPE 2 -------");

console.log(describeString("hola"));
console.log(describeString("abcc"));
console.log(describeString("aabbca"));


//ETAPE 3 - SUITE DE CONWAY 

function LookAndSay(char, n) {
    let currentChar = char
    let result = [currentChar]

    for(let i = 1 ; i<n ; i++) {
        currentChar = describeString(currentChar)
        result.push(currentChar)      
    }
    return result.join("\n")
   
}
console.log("------- ETAPE 3 -------");
console.log(LookAndSay('a', 3));
console.log();

console.log(LookAndSay('1', 3));
console.log();

console.log(LookAndSay('h', 5));
