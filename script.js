const form = document.getElementById('form-atividade');


const contatos = [];
const telefones = [];




let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
   
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputtelContato = document.getElementById('tel-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já foi inserido`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(parseFloat(inputtelContato.value));
    
        let linha = '<tr>';  
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputtelContato.value}</td>`;
    
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputtelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



