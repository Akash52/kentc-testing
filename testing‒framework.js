const { sum, subtract } = require('./math.js')

function sumTest() {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
}

test('sum adds number', sumTest)

function subTest() {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
}
test('sub subtracts number', subTest)

function test(title, callback) {
  try {
    callback()
    console.log(`${title} - OK 🔥`)
  } catch (error) {
    console.error(`${title} - FAILED 🔴`)
    console.error(error)
  }
}

//Abstraction for repeate code

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      } else {
        console.log('Success')
      }
    },
  }
}
