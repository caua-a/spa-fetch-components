/* Testando a função: carregarComponente
01 - Criar o componente que será injetado
02 - Criar o elemento que irá receber o componente (no index index.html) (<div id="app"></div>)
03 - Capturar o elemento que irá receber o componente( no index.html)
04 - Utilizar a função para carregar o componente */

const botao_then = document.querySelector('.btn_then')
const botao_await = document.querySelector('.btn_await')
const input_cep = document.querySelector('.input_cep')
const div_response = document.querySelector('.response')

/* Criar uma requisição HTTP com fetch e .then */

botao_then.addEventListener('click', (e) => {


    const cep = input_cep.value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const consulta = fetch(url)

    consulta.then((resposta) => {
        if (!resposta.ok) {
            throw new Error('Erro na Requisição')
        }

        return resposta.json()
    })
        .then((dados) => {
            if (dados.erro) {
                throw new Error('CEP inválido ou não encontrado')
            }

            console.log('Resultado com .then', dados)
            div_response.textContent =
                `Endereço: ${dados.logradouro}
            Bairro: ${dados.bairro}
            Cidade: ${dados.localidade}
            Estado: ${dados.estado} (${dados.uf})
            CEP: ${dados.cep}
            DDD: ${dados.ddd}
            Região: ${dados.regiao}`;
        })
        .catch((error) => {

            console.warn(error.message)
        })
})
/* Criar uma requisição HTTP com fecth e async/await */



botao_await.addEventListener('click', async () => {


    const cep = input_cep.value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const consulta = fetch(url)
    try {
        const resposta = await consulta

        if (!resposta.ok) {
            throw new Error('Erro na requisição')
        }
        const dados = await resposta.json()
        console.log('Resultado com async/await', dados)
    } catch (erro) {
        console.log('ocorreu um erro', erro)
    }


})

