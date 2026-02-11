let botao = document.getElementById("idpesquisa")
 botao.addEventListener("click", pesquisa)
 async function pesquisa(){

    let pesquisaa = document.getElementById("inputpesquisa")
    let valorguardado = pesquisaa.value
        valorguardado = encodeURIComponent(valorguardado)
        const filtro = "/anime?filter[text]="
        let url = "https://kitsu.io/api/edge" + filtro + valorguardado
        console.log(url)
    console.log(pesquisaa.value)
    alert("Pesquisando Anime")
       let fetchs = await fetch(url)
       fetchs = await fetchs.json()
       console.log(fetchs)


     if(fetchs.data.length === 0){
        alert("Nenhum anime foi encontrado")
        return
    }
     let divResultado = document.getElementById("animeList")
      divResultado.innerHTML = "" 

       for(let i = 0; i < fetchs.data.length; i++){
        
        let anime = fetchs.data[i].attributes
    
        let card = document.createElement("div")
        card.classList.add("anime-card")

        let img = document.createElement("img")
        img.src = anime.posterImage.small
        img.alt =anime.canonicalTitle

        let titulo = document.createElement("p")
        titulo.textContent = anime.canonicalTitle

        card.appendChild(img)
        card.appendChild(titulo)
        divResultado.appendChild(card)

        
    }

    
  

       
     
      
    
    
       
     
  
    
}
 function limpar() {
    alert("Limpando dados");

 const divResultado = document.getElementById("animeList")
  if (divResultado) divResultado.innerHTML = "";
}



 
