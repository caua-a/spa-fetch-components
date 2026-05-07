/* Testando a função: carregarComponente
01 - Criar o componente que será injetado
02 - Criar o elemento que irá receber o componente (no index index.html) (<div id="app"></div>)
03 - Capturar o elemento que irá receber o componente( no index.html)
04 - Utilizar a função para carregar o componente */

const botao_then = document.querySelector('.btn_then')
const botao_await = document.querySelector('.btn_await')
const input_cep = document.querySelector('.input_cep')


/* Criar uma requisição HTTP com fetch e .then */

botao_then.addEventListener('click',(e)=>{

    const cep = input_cep.value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const consulta = fetch(url)

    consulta
    .then((resposta) => {
        if (!resposta.ok){
            throw new Error('Erro na Requisição')
        }
        return resposta.json()
    })
    .then((dados) => {
        if(dados.erro){
            throw new Error('CEP inválido ou não encontrado')
        }
        console.log(dados)
    })
    .catch((error) => {
        console.warn(error.message)
    })
})
/* Criar uma requisição HTTP com fecth e async/await */


