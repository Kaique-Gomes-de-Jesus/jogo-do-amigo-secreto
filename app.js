let arrayAmigos = []; // Array que irá armazenar os amigos adicionados

function adicionarAmigo(){
    let nome = document.querySelector("input").value; //Utilizando document.querySelector para pegar o valor do input
    if (nome == "") {
        alert("Digite um nome válido!");
        limparCampo();
    
    }
    else if (arrayAmigos.includes(nome)) {   //Utilizando includes para verificar se o nome já foi adicionado
        alert("Este nome já foi adicionado!");
        limparCampo();
    }
    else{
        arrayAmigos.push(nome); //Utilizando push para adicionar o nome a lista de amigos
        let nomesAdicionados = document.getElementById("listaAmigos"); //Utilizando getElementById para pegar o elemento pelo id
        let nomeAdicionado = document.createElement("li"); //Utilizando createElement para criar um elemento li
        nomeAdicionado.textContent = nome; //Utilizando textContent para adicionar o nome ao elemento li
        nomesAdicionados.appendChild(nomeAdicionado); //Utilizando appendChild para adicionar o elemento li ao elemento ul
        
        limparSorteio();
        limparCampo();
       
    }
    
}

function limparCampo(){
    document.querySelector("input").value = ""; //Utilizando document.querySelector para limpar o campo input
}

function limparLista(){
    let listaAmigos = document.getElementById("listaAmigos"); 
    listaAmigos.innerHTML = ""; //Utilizando innerHTML para limpar a lista de amigos adicionados
}

function limparSorteio(){
    let amigoSorteado = document.getElementById("resultado");
    amigoSorteado.innerHTML = ""; //Utilizando innerHTML para limpar o resultado do sorteio
}

function sortearAmigo(){
    if (arrayAmigos == ""){        //Verificando se a lista de amigos está vazia  
        alert("Adicione amigos para sortear!");  
       limparSorteio();
       return; //Retornando para não executar o resto da função
    }

    let gerarNome = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)]; //Utilizando Math.floor para arrendodar e Math.random para sortear um amigo
    arrayAmigos.splice(arrayAmigos.indexOf(gerarNome), 1) //Utilizando splice para remover o amigo sorteado (1 amigo) da lista e o indexOf para encontrar a posição do amigo sorteado.
    
    let amigoSorteado = document.getElementById("resultado");
    let nomeSorteado = document.createElement("li"); 
    nomeSorteado.textContent = gerarNome;
    amigoSorteado.appendChild(nomeSorteado);

    resultado.innerHTML = `Amigo sorteado é: ${gerarNome}`; //Utilizando innerHTML para mostrar nome sorteado
    limparLista();
}

