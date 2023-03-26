// Konstruktory
class User {
    constructor (name, lastName) {
        this.name = name;
        this.lastName = lastName
    }
}

console.log(User)


// Factory
function carFactory () {
    return {
        make: 'Audi',
        year: '2022'
    }
}

console.log(carFactory())

// Builder
// np. formularze 
class StringBuilder {
    str = ''

    add (string) {
        this.str += string
        return this
    }

    build() {
        return this.str
    }
}

const stringBuilder = new StringBuilder()
const John = stringBuilder.add("John")
const Smith = stringBuilder.add("Smith")
console.log(John)
console.log(Smith)

// Prototypy
function Point (x, y) {
    this.x = x
    this.y = y

    Point.prototype.toString = function () {
        return `x = ${this.x}, y = ${this.y}`
    }
}

const pin = new Point (45, 99)

console.log(pin)

// Singleton
// np koszyk lub stworzenie nawigacji 

class Calculator {
    add (a, b) {
        return a + b
    }
}

const calc = new Calculator()

console.log(calc.add(50, 50))

// Decorator
const createDog = name => ({
    name,
    bark() {}
})

const reksio = createDog('Reksio')

const DogDecorator = dog => Object.assign(dog, {
    fetch() {}
})

const ulepszonyReksio = DogDecorator(reksio)

console.log(ulepszonyReksio)

// Facade
class Discount {
    discount = 0.75

    apply (amount) {
        return amount * this.discount
    }
}

class CurrencyConvert {
    exchangeRate = 0.45

    convert (amount) {
        return amount * this.exchangeRate
    }
}

// Proxy 
class Cat {
    constructor (name) {
        this.name = name
    }

    bark () {
        console.log('Miau')
    }
    fetch() {
        console.log('Jem')
    }
}

function CatProxy (cat) {
    return {
        get name () {
            console.log('Pobiram name')
            return cat.name
        },
        set name (newValue) {
            console.log('Ustawiam wartość name')
            cat.name = newValue
        }
    }
}

const catOne = new Cat('Maks')

console.log(catOne)

// Iterator
class Iterator {

    constructor(items) {
        this.index = 0
        this.items = items
    }

    next () {
        const nextItem = this.items[this.index]
        this.index += 1
        return nextItem
    }

    hasNext () {
        return this.index < this.items.length
    }
}
const friends = ['Kowalski', 'Karkowski']

const iterator1 = new Iterator(friends)

console.log(iterator1.next(), iterator1.next())

// Strategy
// np. kalkulator 
const add = (a,b) => a + b
const substract = (a,b) => a - b

class CalculatorTwo {
    operation = () => 0

    setOperation (operation) {
        this.operation = operation
    }

    calculate (a,b) {
        return this.operation(a,b)
    }
}

const calcTest = new CalculatorTwo()

calcTest.setOperation(add)

console.log(calcTest.calculate(1, 20))

// -----------------

const calcTestTwo = new CalculatorTwo()

calcTestTwo.setOperation(substract)

console.log(calcTestTwo.calculate(99, 9))

