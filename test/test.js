let x = 5
try{
    x = y+1
} catch(erro){
    let text = `<div>
    <p><strong>Nome do erro:</strong>${erro.name}</p>
    <p><strong>Mensagem do erro:</strong> ${erro.message}</p>
    <p><strong>Stack:</strong> ${erro.stack})</p>
    </div>`
    document.body.innerHTML = text
}