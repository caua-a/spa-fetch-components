/* Testes com os exemplos da w3 Schools */
const body = document.querySelector('#app')
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

carregarComponente(caminho, body)

// carregarComponente('c-test.html', document.querySelector('body'))

/* Lançar um excessão (erro personalizado) */
const gerarErro = () => {
    try {
        let idade = -5
        if (idade < 0) {
            let erro = new Error('idade invalida    ')
            erro.codigo = 1001
            erro.tipo = 'validacao'
            throw erro
        }
    } catch (erro) {
        let text = `<div>
        <p><strong>Nome do erro:</strong>${erro.name}</p>
        <p><strong> Codigo:</strong>${erro.codigo}</p>
        <p><strong> Tipo:</strong>${erro.tipo}</p>
        <p><strong>Mensagem do erro:</strong> ${erro.message}</p>
        <p><strong>Stack:</strong> ${erro.stack})</p>
        </div>`
        document.body.innerHTML = text
    }
}
/* Criar uma função geradora de erro */


/* Testando a função: carregarComponente
01 - Criar o componente que será injetado
02 - Criar o elemento que irá receber o componente (no index index.html) (<div id="app"></div>)
03 - Capturar o elemento que irá receber o componente( no index.html)
04 - Utilizar a função para carregar o componente */


/* Criar uma requisição HTTP com fetch e .then */

/* Criar uma requisição HTTP com fecth e async/await */
