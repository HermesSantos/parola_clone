let palavras = ["bunda"]
palavras.forEach(palavra => {
  for(let letra = 0; letra < palavra.length; letra ++){
    let teste = document.createElement('div')
    let inputer = document.createElement('input')
    teste.classList.add('foi')
    inputer.classList.add('inputer')
    document.getElementById("saida").appendChild(teste).innerHTML="_"
    document.getElementById("input").appendChild(inputer)
  }
})