const { sumAsync, subtractAsync } = require('./math.js')

test('sum adds number asynchronously', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('sub subtracts number asynchronously', async () => {
  const result = await subtractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})

async function test(title, callback) {
  try {
    await callback()
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
      }
    },
  }
}
