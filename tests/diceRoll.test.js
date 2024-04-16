const { rollDice } = require("../src/diceRolling")


beforeEach(() => {
    console.log("A test has been started...")
})

afterEach(() => {
    console.log("A test has been completed...")
})

beforeAll(() => {
    console.log("Testing will begin...")
})

afterAll(() => {
    console.log("All Testing has ended...")
})

describe('As a Casual gamer...', () => {
    
    test('... I want to roll a 6 sided dice...', () => {
        let result = rollDice()
        expect(result).toBeGreaterThan(0)
        expect(result).toBeLessThanOrEqual(6)
    })

    test("Top level test is here...", () => {

    })

 })