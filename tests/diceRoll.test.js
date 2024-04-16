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



 })

 describe("As a dungen master...", () => {
    describe("I want to roll a variety of dice sizes...", () => {


        let diceVarities = [
            {
                diceSize : 4,
                diceName: "D4"

            },
            {
                diceSize : 6,
                diceName: "D6"
            },
            {
                diceSize : 8,
                diceName: "D8"
            },
            {
                diceSize : 10,
                diceName: "D10"
            },
            {
                diceSize : 12,
                diceName: "D12"
            },
            {
                diceSize : 20,
                diceName: "D20"
            },
            {
                diceSize : 100,
                diceName: "D100"
            }

         
        ]

        test.each(diceVarities)("$diceName",(diceObject) => {
            let diceResult = rollDice(diceObject.diceSize)
            expect(diceResult).toBeGreaterThan(0)
            expect(diceResult).toBeLessThanOrEqual(diceObject.diceSize)
        })



        // test ("D6", () => {
        //     let result = rollDice(6)
        //     expect(result).toBeGreaterThan(0)
        //     expect(result).toBeLessThanOrEqual(6)
        // })

        // test ("D8", () => {
        //     let result = rollDice(8)
        //     expect(result).toBeGreaterThan(0)
        //     expect(result).toBeLessThanOrEqual(8)
        // })

        // test ("D10", () => {
        //     let result = rollDice(10)
        //     expect(result).toBeGreaterThan(0)
        //     expect(result).toBeLessThanOrEqual(10)
        // })

        // test ("D12", () => {
        //     let result = rollDice(12)
        //     expect(result).toBeGreaterThan(0)
        //     expect(result).toBeLessThanOrEqual(12)
        // })

        // test ("D20", () => {
        //     let result = rollDice(20)
        //     expect(result).toBeGreaterThan(0)
        //     expect(result).toBeLessThanOrEqual(20)
        // })
        
    })
 })
    
        test('... I want to roll a 6 sided dice...', () => {
            let result = rollDice()
            expect(result).toBeGreaterThan(0)
            expect(result).toBeLessThanOrEqual(6)
        })

 


 
