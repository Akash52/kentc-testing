const sum = (a, b) => a + b
const sub = (a, b) => a - b

//Example 1

let result = sum(10, 5)
let expected = 15

if (result !== expected) {
  throw new Error(`Expected ${result} but got ${expected}`)
} else {
  console.log('Success')
}

//Example 2

result = sub(10, 5)
expected = 5

if (result !== expected) {
  throw new Error(`Expected ${result} but got ${expected}`)
} else {
  console.log('Success')
}
