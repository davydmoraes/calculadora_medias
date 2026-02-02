const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji feliz" />';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji triste" />';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = '';
let notas = [];
let atividades = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});


function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');



    let linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado} </td>`;


    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já está cadastrada!`);
    } else {

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
  let mediaFinal = calculaMediaFinal();

  document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);

  document.getElementById('resultado-final-valor').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas [i];
    }

    return somaNotas / notas.length;
}