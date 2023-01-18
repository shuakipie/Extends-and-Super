
class Pet {

	constructor(name, age){
		console.log('IN PET CONTRUCTOR')
		this.name = name
		this.age = age
	}
	eat() {
		return ` ${this.name} is eating`
	}
}

class Cat extends Pet {
	constructor(name, age, liveLeft = 9){
		// this.name = name
		// this.age = age // shortcut used
		console.log('IN CAT CONTRUCTOR')
		super(name,age)
		this.liveLeft = liveLeft
	}
	// method
	meow() {
		return 'MEOW MEEOW'
	}
}
class Dog  extends Pet{
	bark() {
		return 'WOW WOW WOW'
	}
}


// object

const newDog = new Dog('Ryzen', 15)
console.log(newDog.eat())
console.log(newDog.age)
console.log(newDog.name)

