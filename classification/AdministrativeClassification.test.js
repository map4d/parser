const Classification = require('./AdministrativeClassification')

module.exports.tests = {}

module.exports.tests.constructor = (test) => {
  test('constructor administrative level 1', (t) => {
    let c = new Classification(1)
    t.true(c.public)
    t.equals(c.label, 'level1')
    t.equals(c.confidence, 1.0)
    t.deepEqual(c.meta, {})
    t.end()
  })
  test('constructor administrative level 2', (t) => {
    let c = new Classification(2)
    t.true(c.public)
    t.equals(c.label, 'level2')
    t.equals(c.confidence, 1.0)
    t.deepEqual(c.meta, {})
    t.end()
  })
  test('constructor administrative level 3', (t) => {
    let c = new Classification(3)
    t.true(c.public)
    t.equals(c.label, 'level3')
    t.equals(c.confidence, 1.0)
    t.deepEqual(c.meta, {})
    t.end()
  })
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`AdministrativeClassification: ${name}`, testFunction)
  }

  for (var testCase in module.exports.tests) {
    module.exports.tests[testCase](test, common)
  }
}
