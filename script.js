async function processar() {
    let salmo = document.getElementById('input-salmo').value
    
    if (isNaN(salmo)) {
        alert('tem q ser numeros')
        return;
      }
    

    const response = await fetch(`https://www.abibliadigital.com.br/api/verses/nvi/sl/${salmo}`)
    
    let resposta = await response.json();
    console.log(resposta)
    if(resposta.msg === 'Chapter not found'){
        alert('Salmo não encontrado')
        return
    }
    
    const {book,chapter,verses} = resposta
    

    document.getElementById('nome-value').innerHTML= book.name;
    document.getElementById('author-value').innerHTML = book.author;
    document.getElementById('group-value').innerHTML = book.group;

    var ol = document.getElementById("lista-salmos");
    for(i = 0; verses.length; i++){
       let {text} = verses[i]
        let li = document.createElement("li"); li.innerHTML = text; ol.appendChild(li);
    }
        
}