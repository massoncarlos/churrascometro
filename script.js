function calc(a ,c ,t, type){
    let base;
    if (t > 6){
        if (type == "carne"){
            base = 650;
        } else if (type == "cerveja"){
            base = 2000;
        }else {
            base = 1500;
        }
    }else{
        if (type == "carne"){
            base = 400;
        } else if (type == "cerveja"){
            base = 1200;
        } else {
            base = 1000;
        }
    }
    let qtd = a * base;
    if (type != "cerveja")
        qtd += (c * (base/2));
    return qtd

}

function calcular(){

    var adultos = parseInt(document.getElementsByName("adultos")[0].value);
    var criancas = parseInt(document.getElementsByName("crianca")[0].value);
    var tempo = parseInt(document.getElementsByName("tempo")[0].value);
    var resultado = document.getElementById("resultado");

    {isNaN(adultos) == true ? adultos = 0 : adultos = adultos};
    {isNaN(criancas) == true ? criancas = 0 : criancas = criancas};
    {isNaN(tempo) == true ? tempo = 0 : tempo = tempo};

    const carne = calc(adultos,criancas,tempo, "carne");
    const cerverja = calc(adultos,criancas,tempo, "cerveja");
    const refrigerante = calc(adultos,criancas,tempo, "refrigerante");

    resultado.innerHTML = `<p>Quantidade de carne: ${carne/1000} (Kg)</p>`;
    resultado.innerHTML += `<p>Quantidade de cerveja: ${cerverja/1000} (L)</p>`;
    resultado.innerHTML += `<p>Quantidade de refrigerante: ${refrigerante/1000} (L)</p>`;
    
}
