const select_estados = document.querySelector('#estados')
const select_municipios = document.querySelector('#municipios')

select_estados.addEventListener('input', async ()=>{

    const estado = select_estados.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`
    select_municipios.length=0
    select_municipios.disabled = false

    const consulta = fetch(url)

    
    let resposta = await consulta
    if(!resposta.ok){
        throw new Error('Erro na Requisição')
    }
    let respObj = await resposta.json()
    console.log(respObj)
    
    respObj.forEach(municipio =>{
        const opcao = new Option(municipio.nome)
        select_municipios.add(opcao)
    })
  


    
})  
