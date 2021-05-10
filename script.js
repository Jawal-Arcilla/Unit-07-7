document.getElementById('button').addEventListener('click', calculate)

let number1 = 0
let number2 = 0
let answer = 0
let counter = 0

function calculate () {
  number1 = document.getElementById('first').value
  number2 = document.getElementById('second').value
  number1 = parseInt(number1)
  number2 = parseInt(number2)

  for (counter = 0; counter < number1; counter++)
  {
    answer = answer + number2
  }
  document.getElementById('result').innerHTML = answer
}
