import  add from "../index.js"

describe("add function", () => {

    it("should return the sum of two numbers", () => {

        const num1 = 3
        const num2 = 1

        const result = add(num1, num2)

        expect(result).toBe(5)
    })
})