 import '../src/Array'

describe('Array semi-fill', () => {
  it('Array.reduce can sum values in array', () => {
    const list = [1, 2, 4, 8, 16, 32]
    function sum(accum, current, index, array) {
      expect(current).toBe(array[index])
      expect(array).toBe(list)
      return accum + current
    }
    const result = list.reduce(sum, 0)
    expect(result).toBe(63)
  })
  it('Array map can transform array', () => {
    const list = [1, 2, 3, 4, 5]
    function square(current, index, array) {
      expect(current).toBe(array[index])
      expect(array).toBe(list)
      return current * current
    }
    const result = list.map(square)
    expect(result).toEqual([1, 4, 9, 16, 25])
  })
})
