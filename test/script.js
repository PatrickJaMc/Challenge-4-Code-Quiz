var firstContainer = document.getElementById('first');
var btnEl = document.getElementById('click')
var goodbyeEl = document.getElementById('goodbye')

var differentPhrases = ['new text here', 'hi patrick', 'im hungry']
 var index = 0

function start(){
// // create 
// var h1El = document.createElement('h1')

// // add
// h1El.textContent = "Hi Patrick!"
// // changed the value of the existing element
// btnEl.classList.add('hidden')

// // append
// firstContainer.append(h1El)


goodbyeEl.textContent = differentPhrases[index]
index++
}

btnEl.addEventListener('click',start )
