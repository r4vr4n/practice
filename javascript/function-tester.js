function functionToTest(nums) {}

const testCases = [{ input: [1, 0, 2, 3, 0, 4, 5, 0] }]

const results = testCases.map(({ input }) => ({
  Input: JSON.stringify(input),
  Output: functionToTest(input),
}))

console.log(results)
