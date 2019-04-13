[![Build Status](https://travis-ci.org/bermanboris/create-markup-parser.svg?branch=master)](https://travis-ci.org/bermanboris/create-markup-parser)

# Create Markup Parser

Building your markup language was never been that easy. This library is built using Non-deterministic Finite Automata concepts in mind, which simplifies the readability and maintainability of the source code.

### Usage

```bash
yarn add create-markup-parser
# or
npm install create-markup-parser
```

### Importing library

You can import the generated bundle to use the whole library generated by this starter:

```javascript
import { createMarkupParser } from 'create-markup-parser'

// Create custom markup parser
const parser = createMarkupParser({
  '^': character => character.toUpperCase(),
  _: character => character.toLowerCase(),
  '#': () => undefined
})

const input = 'Hello ^dear^. Good to see _YOU_ #again#'
const output = parser.parse(input)

console.log(output) // Hello DEAR. Good to see you
```
