const action = require('../src/main.ts')

test('works with sample input', async () => {
  const fs = require('fs')
  const expected = JSON.parse(
    fs.readFileSync('__tests__/pytes-coverage.out.json')
  )
  const message = action.createMessage('__tests__/pytes-coverage.txt')
  expect(message).toEqual(expected)
})

test('works with branch input', async () => {
  const fs = require('fs')
  const expected = JSON.parse(
    fs.readFileSync('__tests__/branch-coverage.out.json')
  )
  const message = action.createMessage('__tests__/branch-coverage.txt')
  expect(message).toEqual(expected)
})
