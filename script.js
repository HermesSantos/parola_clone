let id = 2
let secretWord = "bunda"
let givenWord = []

function verifyLetter (letter) {
  for(let i = 0; i<= 4; i++) {
    // verifica se a letra e existe
    secretWord[i] === letter ? console.log("existe") : ""
    if(secretWord[i] === letter) {
      // verifica a posição original
      console.log("posição", secretWord.indexOf(letter))
    }
  }
}
function changeField (value) {
  if(id >= 6) {
    id === 6 ? givenWord.push(value) : ''
    id === 6 ? verifyAnswer() : ''
  } else {
    if(value) {
      document.getElementById(`l${id}`).focus()
      console.log(id)
      verifyLetter(value)
      givenWord.push(value)
      id++
    } 
  }
}
function verifyAnswer () {
  console.log("verificando");
  let newDiv = document.createElement("div")
  newDiv.innerHTML = givenWord.join('')
  let element = document.getElementById("forTheNew")
  element.appendChild(newDiv)
  clearFields()
}
function clearFields () {
  for(let i = 1; i<6; i++){
    let element = document.getElementById(`l${i}`)
    element.value=""
  }
}