import { describe, expect, test } from "vitest"
import renderer from 'react-test-renderer'
import Footer from "../components/Footer"

describe('Footer', () => {
  test('load footer', () => {
    const component = renderer.create(<Footer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})