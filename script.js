const nomeDoInvestidor = document.getElementById("nomeDoInvestidor"); 

const capitalInicial = document.getElementById("capitalInicial"); 

const taxaDeJurosMensal = document.getElementById("taxaDeJurosMensal"); 

const numeroDeMeses = document.getElementById("numeroDeMeses"); 

function calcularMontante() {

    let valorCapitalInicial = parseFloat(capitalInicial.value);
    
    let valorTaxaDeJurosMensal = parseFloat(taxaDeJurosMensal.value) / 100;
    
    let valorNumeroDeMeses = parseInt(numeroDeMeses.value);
    if (!nomeDoInvestidor.value || isNaN(valorCapitalInicial) || isNaN(valorTaxaDeJurosMensal) || isNaN(valorNumeroDeMeses)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    let valorMontante = valorCapitalInicial * Math.pow(1 + valorTaxaDeJurosMensal, valorNumeroDeMeses);
    alert(
        "Olá "+nomeDoInvestidor.value+"\n"+
        "O seu investimento gerará o Montante de "+valorMontante.toFixed(2)
    );
}