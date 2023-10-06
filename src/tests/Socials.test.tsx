import { describe, expect, test } from "vitest"
import renderer from 'react-test-renderer'
import Socials, { SocialItem } from '../components/Socials'

describe('Socials', () => {
  test('load socials', () => {
    const component = renderer.create(<Socials />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})