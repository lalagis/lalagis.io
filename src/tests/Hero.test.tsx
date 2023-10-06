import { describe, expect, test } from "vitest"
import renderer from 'react-test-renderer'
import Hero from "../components/Hero"

describe('Hero', () => {
  test('load hero', () => {
    const component = renderer.create(<Hero />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})