const { sum, subtract } = require('./math.js')

let result, expected

result = sum(3, 7)
expected = 10

expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

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
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      } else {
        console.log('Success')
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not greater than ${expected}`)
      } else {
        console.log('Success')
      }
    },
    toBeLessThan(expected) {
      if (actual >= expected) {
        throw new Error(`${actual} is not less than ${expected}`)
      } else {
        console.log('Success')
      }
    },
    toBeTruthy() {
      if (!actual) {
        throw new Error(`${actual} is not truthy`)
      } else {
        console.log('Success')
      }
    },
    toBeFalsy() {
      if (actual) {
        throw new Error(`${actual} is not falsy`)
      } else {
        console.log('Success')
      }
    },
  }
}
