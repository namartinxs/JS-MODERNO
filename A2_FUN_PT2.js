function canal(){
    let n1 = 1  
    let n2 = 5
    let resultado = n1*n2 

    //console.log("CFB-CURSOS")
    // depois que acaba o processamento retorna um valor
    if(resultado %2 ==0){
        return `${resultado} PAR`
    }
        
    else{
        return `${resultado} IMPAR`
    }
        
    

}

let num = canal()
console.log(num)