import  add from "../index.js"

describe("add function", () => {

    it("should return the sum of two numbers", () => {

        const num1 = 2
        const num2 = 3

        const result = add(num1, num2)

        expect(result).toBe(3)
    })
})