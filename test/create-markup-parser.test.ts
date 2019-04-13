import { createMarkupParser, MarkupParser } from '../src/create-markup-parser'

let parser: MarkupParser

beforeEach(() => {
  parser = createMarkupParser({
    '^': character => character.toUpperCase(),
    _: character => character.toLowerCase(),
    '#': () => undefined
  })
})

test('parses text correctly', () => {
  const input = 'hello ^world^, _OKAY_ #nice'
  const output = parser.parse(input)
  expect(output).toBe('hello WORLD, okay')
})
