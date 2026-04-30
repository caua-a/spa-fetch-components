/* Testes com os exemplos da w3 Schools */
const container = document.querySelector('#app')
const caminho = 'c-test.html'

const carregarComponente = async (caminho, container) => {
    try {
        const resposta = await fetch(caminho)

        if (!resposta.ok) {
            throw new Error('Erro ao carregar componente')
        }

        const html = await resposta.text()
        container.innerHTML = html

    } catch (erro) {
        console.error(erro)
    }
}


// carregarComponente('c-test.html', document.querySelector('body'))

/* Lançar um excessão (erro personalizado) */
    try {
        let idade = -5
        if (idade < 0) {
            geradorErros(1001, 'validação', 'erro')
        }
    } catch (erro) {
        let text = `<div>
        <p><strong>Nome do erro:</strong>${erro.name}</p>
        <p><strong> Codigo:</strong>${erro.codigo}</p>
        <p><strong> Tipo:</strong>${erro.tipo}</p>
        <p><strong>Mensagem do erro:</strong> ${erro.message}</p>
        <p><strong>Stack:</strong> ${erro.stack})</p>
        </div>`
        container.innerHTML = text
    }

function geradorErros(codigo, tipo, mensagem){
    let erro = new Error(mensagem)
    erro.codigo = codigo
    erro.tipo = tipo
    return erro
}

try {
    let saldo = 0
    let valortransferencia = 100
    if (saldo < valortransferencia) {
        throw geradorErros('0000', 'valor', 'nao tem saldo o suficiente')
    }
} catch (erro) {
        let text = `<div>
        <p><strong>Nome do erro:</strong>${erro.name}</p>
        <p><strong> Codigo:</strong>${erro.codigo}</p>
        <p><strong> Tipo:</strong>${erro.tipo}</p>
        <p><strong>Mensagem do erro:</strong> ${erro.message}</p>
        <p><strong>Stack:</strong> ${erro.stack})</p>
        </div>`
        container.innerHTML = text
}
/* Criar uma função geradora de erro */

/* Testando a função: carregarComponente
01 - Criar o componente que será injetado
02 - Criar o elemento que irá receber o componente (no index index.html) (<div id="app"></div>)
03 - Capturar o elemento que irá receber o componente( no index.html)
04 - Utilizar a função para carregar o componente */


/* Criar uma requisição HTTP com fetch e .then */

/* Criar uma requisição HTTP com fecth e async/await */




fetch('https://viacep.com.br/ws/14811428/json/')
    .then((resposta) => { 
        return resposta.json()
    })
    .then((dados) =>{
        return console.log(dados)
    })
    .catch((error) => {
        return console.warn(error)
    })