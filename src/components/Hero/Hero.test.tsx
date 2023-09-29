import { describe, expect, test } from "vitest"
import renderer from 'react-test-renderer'
import Hero from "."

describe('Hero', () => {
  test('load hero', () => {
    const component = renderer.create(<Hero />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})