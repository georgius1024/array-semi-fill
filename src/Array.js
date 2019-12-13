Array.prototype.reduce = function(callback, initial) {
  let accum = initial
  for(let i = 0; i < this.length; i++) {
    accum = callback(accum, this[i], i, this)
  }
  return accum
}

Array.prototype.map = function(cb, that) {
  const result = []
  const callback = that ? cb.bind(that) : cb
  for(let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  return result
}