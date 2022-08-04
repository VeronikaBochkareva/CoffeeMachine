// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let initial = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    chocolate: 9,
    money: 550
}

const espresso = {
    water: 250,
    beans: 16,
    money: 4
}

const latte = {
    water: 350,
    milk: 75,
    beans: 20,
    money: 7
}

const cappuccino = {
    water: 200,
    milk: 100,
    beans: 12,
    money: 6
}
const hotChocolate = {
    water: 200,
    milk: 100,
    beans: 12,
    chocolate: 5,
    money: 5
}

function buy() {
    let coffee = input(`
What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - hot chocolate, back - to main menu:`)
    if (coffee !== 'back') {
        let coffeeType
        let drink
        if (coffee === '1') {
            coffeeType = espresso
            drink = 'espresso'
        } else if (coffee === '2') {
            coffeeType = latte
            drink = 'latte'
        } else if (coffee === '3') {
            coffeeType = cappuccino
            drink = 'cappuccino'
        } else if (coffee === '4') {
            coffeeType = hotChocolate
            drink = 'hot chocolate'
        }

        if (initial["water"] - coffeeType["water"] < 0) {
            console.log('Sorry, not enough water!')
        } else if ((coffee === '2' || coffee === '3') && initial["milk"] - coffeeType["milk"] < 0) {
            console.log('Sorry, not enough milk!')
        } else if ( initial["beans"] - coffeeType["beans"] < 0) {
            console.log('Sorry, not enough beans!')
        } else if (initial["cups"] - 1 < 0) {
            console.log('Sorry, not enough cups!')
        } else if (coffee === '4' && initial['chocolate'] - coffeeType['chocolate'] < 0) {
            console.log('Sorry, not enough chocolate!')
        } else {
            console.log('I have enough resources, making you a coffee!')

            if (coffee === '2' || coffee === '3') {
                initial['milk'] = initial["milk"] - coffeeType["milk"]
            } else {
                initial['milk'] = initial["milk"]
            }

            if (coffee === '4') {
                initial['chocolate'] = initial['chocolate'] - coffeeType['chocolate']
            }

            initial['water'] = initial["water"] - coffeeType["water"]
            initial['beans'] = initial["beans"] - coffeeType["beans"]
            initial['money'] = initial["money"] + coffeeType["money"]
            initial['cups'] = initial["cups"] - 1

            console.log('---Wait a while---')

            console.log(`Enjoy your ${drink}
                             シ   シ   シ
                `)
        }
    }
}

function fill() {
    let water = Number(input(`
Write how many ml of water you want to add:`))
    let milk = Number(input(`
Write how many ml of milk you want to add:`))
    let beans = Number(input(`
Write how many grams of coffee beans you want to add:`))
    let chocolate = Number(input(`
Write how much chocolate you want to add:`))
    let cups = Number(input(`
Write how many disposable coffee cups you want to add:`))
    initial['water'] = initial["water"] + water
    initial['milk'] = initial["milk"] + milk
    initial['beans'] = initial["beans"] + beans
    initial['chocolate'] = initial['chocolate'] + chocolate
    initial['cups'] = initial["cups"] + cups

}

function take() {
    console.log(`I gave you $${initial["money"]}`)
initial['money'] = 0
}

function remaining(){
    console.log(`
The coffee machine has:
${initial["water"]} ml of water
${initial["milk"]} ml of milk
${initial["beans"]} g of coffee beans
${initial["cups"]} disposable cups
${initial['chocolate']} of chocolate
$${initial['money']} of money`)
}

let action = input(`
Write action (buy, fill, take, remaining, exit):
`)


while (action !== 'exit') {
    if (action === 'buy') {
        buy()
    } else if (action === 'fill') {
        fill()
    } else if (action === 'take') {
        take()
    } else if (action === 'remaining') {
        remaining()
    }
    action = input(`
Write action (buy, fill, take, remaining, exit):
`)
}





