//funcao nomeada
function soma(){

}

// let fAnonima = function(n1,n2){return n1 + n2}

// fAnonima(10,5)
// console.log(f) 



//funcao construtor anonima
let fAnonima = new Function("n1","n2","return v1+v2")


console.log(fAnonima(10,5))