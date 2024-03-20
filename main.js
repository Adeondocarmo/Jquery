const form = document.getElementById('formulario');
const tarefas = [];

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizarAgenda();
    
});

function adicionarLinha() {

    const inputTarefa = document.getElementById('tarefa');
    tarefas.push(inputTarefa.value);

    let linha =`<table>`;
    linha += `<li>${inputTarefa.value} </li>`;
    linha += `</table>`;
    linhas += linha;

    inputTarefa.value = '';
    
}

function atualizarTabela() {
    const corpoTabela = document.querySelector("ol");
    corpoTabela.innerHTML = linhas;
}

function atualizarAgenda() {
    console.log(tarefas);
}

$('#selected').ready(function() {
    $('ol').click(function() {
        $('li').css('text-decoration', 'line-through');
    })
})
