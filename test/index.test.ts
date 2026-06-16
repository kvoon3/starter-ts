import { describe, expect, it } from 'vitest'
import { one, two } from '../src/index.ts'

describe('index', () => {
  it('exports one', () => {
    expect(one).toBe(1)
  })

  it('exports two', () => {
    expect(two).toBe(2)
  })
})
