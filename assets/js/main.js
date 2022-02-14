function escopo(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    function calculaImc (evento){
        evento.preventDefault();
        const peso = form.querySelector(".input-peso");
        const altura = form.querySelector(".input-altura");
        let imc = (peso.value / (altura.value * altura.value)).toFixed(2);
        let situacao;

        if(peso.value == "" || isNaN(peso.value)){
            situacao = "Peso invalido";
            imc = 0;
        } else if(altura.value == "" || isNaN(altura.value)){
            situacao = "Altura invalida"
            imc = 0;
        } else if(imc < 18.5){
            situacao = "Abaixo do peso";
        } else if(imc >= 18.5 && imc <= 24.99){
            situacao = "Peso normal";
        } else if(imc >= 25 && imc <= 29.99){
            situacao = "Sobrepeso";
        } else if( imc >= 30 && imc <=34.99){
            situacao = "Obesidade grau 1";
        } else if(imc >= 35 && imc<=39.9){
            situacao = "Obesidade grau 2";
        } else if (imc >= 40){
            situacao = "Obesidade grau 3";
        }

        if(imc == 0){
            resultado.innerHTML = `<p class="invalido"> (${situacao}) </p>`;
        } else{
            resultado.innerHTML = `<p class="valido"> Seu IMC é: ${imc} (${situacao}) </p>`;
        }

    }

    form.addEventListener('submit', calculaImc);

}

escopo();