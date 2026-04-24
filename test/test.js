let x = 5
try{
    x = y+1
} catch(erro){
    let text = `
    <p>Nome do erro:${erro.name}</p>
    <p>Mensagem do erro: ${erro.message}</p>
    <p>Stack: ${erro.stack})</p>`
    document.body.innerHTML = text
}