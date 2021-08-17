import { expect } from 'chai'
import { getCompletedTodos } from '../selectors'

describe('The getCompletedTodos selector', () => {
  it('Returns oonly completed todos', () => {
    const fakeTodos = [
      {
        text: 'Say Hello',
        isCompleted: true,
      },
      {
        text: 'Say Goodye',
        isCompleted: false,
      },
      {
        text: 'Climb Mount Everest',
        isCompleted: false,
      },
    ]
    const expected = [
      {
        text: 'Say Hello',
        isCompleted: true,
      },
    ]
    const actual = getCompletedTodos.resultFunc(fakeTodos)

    expect(actual).to.deep.equal(expected)
  })
})
