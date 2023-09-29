import { describe, expect, test } from "vitest"
import renderer from 'react-test-renderer'
import Projects, { ProjectItem } from '.'

describe('Projects', () => {
  test('load projects', () => {
    const component = renderer.create(<Projects />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})