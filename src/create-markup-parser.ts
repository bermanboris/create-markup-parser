export interface Transformers {
  [key: string]: (character: string) => string | undefined
}

export interface MarkupParser {
  parse: (input: string) => string
}

type State = string

interface Result {
  character?: string
  nextState: State
}

export function createMarkupParser(transformers: Transformers): MarkupParser {
  const NormalState = 'Normal'

  function handleCharacter(currentState: State, character: string): Result {
    for (const [symbol, transform] of Object.entries(transformers)) {
      if (currentState === NormalState && character === symbol) {
        return { character: undefined, nextState: symbol }
      }

      if (currentState === symbol && character !== symbol) {
        return { character: transform(character), nextState: symbol }
      }

      if (currentState === symbol && character === symbol) {
        return { character: undefined, nextState: NormalState }
      }
    }

    return { character, nextState: NormalState }
  }

  function parse(input: string) {
    let currentState = NormalState
    let output = ''

    for (const character of input) {
      const result = handleCharacter(currentState, character)
      currentState = result.nextState

      if (result.character !== undefined) {
        output += result.character
      }
    }

    return output.trim()
  }

  return { parse }
}
