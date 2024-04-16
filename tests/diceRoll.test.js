const { rollDice } = require("../src/diceRolling")



describe('As a Casual gamer...', () => {
    
    test('... I want to roll a 6 sided dice...', () => {
        let result = rollDice()
        expect(result).toBeGreaterThan(0)
        expect(result).toBeLessThanOrEqual(6)
    })

    test("Top level test is here...", () => {

    })

 })