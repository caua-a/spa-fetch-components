/* Testes com os exemplos da w3 Schools */

/* Lançar um excessão (erro personalizado) */

/* Criar uma função geradora de erro */

function GeradorErros(mensagem, codigo, tipo){
    let erro = new Error(mensagem)
    erro.codigo = codigo
    erro.tipo = tipo

    return erro
}

try{

    let saldo = 100;

    if (saldo < 200){
        throw GeradorErros('Saldo Insuficiente',50,'FINANCEIRO')
    }

} catch(erro){

    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br />
    <strong>Mensagem:</strong> ${erro.message} <br />
    <strong>Código:</strong> ${erro.codigo}<br />
    <strong>Tipo:</strong> ${erro.tipo}<br />
    <strong>Stack:</strong> <span>${erro.stack}</span>
    `;

    document.body.innerHTML = text

};

/* Testando a função: carregarComponente
01 - Criar o componente que será injetado
02 - Criar o elemento que irá receber o componente (no index index.html) (<div id="app"></div>)
03 - Capturar o elemento que irá receber o componente( no index.html)
04 - Utilizar a função para carregar o componente */



/* Criar uma requisição HTTP com fetch e .then */



/* Criar uma requisição HTTP com fecth e async/await */

const url = 'https://viacep.com.br/ws/01001000/json/'
const consulta = fetch(url);
console.log(consulta)
consulta.then((resposta)=>{
    if(!resposta.ok){
        throw new Error('CEP Inválido')
    }
    const resp = resposta.json()
    console.log(resp)
    return resp
}).then((dados) => {

    console.log(dados)
}).catch((error) => {
    
    console.warn(error)
})
