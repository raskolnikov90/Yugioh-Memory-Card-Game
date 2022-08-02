const cardArray = [ 
	{
		name: 'darkmagician',
		img: 'images/darkmagician.jpg',
	},
	{
		name: 'chaosmagician',
		img: 'images/chaosmagician.png',
	},
	{
		name: 'illusionchaos',
		img: 'images/illusionchaos.png',
	},
	{
		name: 'timaeus',
		img: 'images/timaeus.jpg',
	},
	{
		name: 'timaeusgirl',
		img: 'images/timaeusgirl.jpg',
	},
	{
		name: 'potofgreed',
		img: 'images/potofgreed.jpg',
	},
	{
		name: 'darkmagician',
		img: 'images/darkmagician.jpg',
	},
	{
		name: 'chaosmagician',
		img: 'images/chaosmagician.png',
	},
	{
		name: 'illusionchaos',
		img: 'images/illusionchaos.png',
	},
	{
		name: 'timaeus',
		img: 'images/timaeus.jpg',
	},
	{
		name: 'timaeusgirl',
		img: 'images/timaeusgirl.jpg',
	},
	{
		name: 'potofgreed',
		img: 'images/potofgreed.jpg',
	},
]

cardArray.sort(() => 0.5 - Math.random()) //trick for sorting arrays

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
	for (var i = 0; i < cardArray.length; i++) {
		const card = document.createElement('img')
		card.setAttribute('src','images/back.jpg')
		card.setAttribute('class','cards')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		gridDisplay.append(card)
	}
}

function checkMatch() {
	const cards = document.querySelectorAll('#grid img')
	const optionOneId = cardsChosenIds[0]
	const optionTwoId = cardsChosenIds[1]
    let samecard = false
	if (optionOneId == optionTwoId) {
		alert("You clicked the same card")
		samecard = true
	}


	if (cardsChosen[0] == cardsChosen[1] && samecard == false) {
		alert('You found a match!')
		cards[optionOneId].setAttribute('src', 'images/circle.jpg')
		cards[optionTwoId].setAttribute('src', 'images/circle.jpg')
		cards[optionOneId].removeEventListener('click',flipCard)
		cards[optionTwoId].removeEventListener('click',flipCard)
		cardsWon.push(cardsChosen)
	} else {
		cards[optionOneId].setAttribute('src', 'images/back.jpg')
		cards[optionTwoId].setAttribute('src', 'images/back.jpg')
	}
	resultDisplay.innerHTML = cardsWon.length
	cardsChosen = []
	cardsChosenIds = []

	if (cardsWon.length == cardArray.length/2){
		resultDisplay.innerHTML = 'Congratulations, you found them all!'
	}
}

function flipCard() {
	let cardId = this.getAttribute('data-id')
	
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenIds.push(cardId)
	this.setAttribute('src', cardArray[cardId].img)
	if (cardsChosen.length === 2) {
		setTimeout(checkMatch, 500)
	}
}

createBoard()






















