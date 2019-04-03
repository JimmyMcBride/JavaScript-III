/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When the 'this' keyword is used in the global scope it will take on the value of the window or console object.
* 2. Implicit Binding: When a function is used and has a dot before it, the object before said dot will be 'this'
* 3. New Binding: When you use 'this' in creating a constructor function, the 'this' keyword is bound to the instance of the object that is created and returned by said constructor function
* 4. Explicit Binding: When you use a call or an apply method, the 'this' keyword is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this)

// Principle 2

const adele = {
	greeting: 'Hello',
	saysHello: function(){
		console.log(`${this.greeting} from the other side.`)
	}
}
adele.saysHello()

// Principle 3

function Game(player1, player2){
	marco = '"Marco!"'
	polo = '"Polo!"'
	this.player1 = player1
	this.player2 = player2
	this.play = function(){
		console.log(`${this.player1} says, ${marco}`)
		console.log(`${this.player2} says, ${polo}`)
	}
	this.argue = function(){
		console.log(`${this.player1} asks, "How's that sound to you?"`)
		console.log(`${this.player2} replies, "I don't think that's such a good idea, ${this.player1}"`)
	}
}
const firstGame = new Game('Rick', 'Morty')
const secondGame = new Game('Bonnie', 'Clyde')
firstGame.play()
secondGame.play()

// Principle 4

secondGame.argue.call(firstGame)
