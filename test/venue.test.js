const testcase = (test, common) => {
  let assert = common.assert(test)

  assert(
    'tiem sua xe chu hoang',
    [
      { venue: 'tiem sua xe chu hoang' }
    ]
  )

  assert(
    'quan pho tran trang',
    [
      { venue: 'quan pho tran trang' }
    ]
  )

  assert(
    'quan chuon chuon ot',
    [
      { venue: 'quan chuon chuon ot' }
    ]
  )

  assert(
    'quan tuan nui',
    [
      { venue: 'quan tuan nui' }
    ]
  )

  assert(
    'quan an nguyen thi lan',
    [
      { venue: 'quan an nguyen thi lan' }
    ]
  )

  assert(
    'quan an nguyen duong',
    [
      { venue: 'quan an nguyen duong' }
    ]
  )

  assert(
    'quan an nguyen duong trung nu vuong',
    [
      { venue: 'quan an nguyen' },
      { street: 'duong trung nu vuong' }
    ]
  )

  assert(
    'quan an nguyen duong, trung nu vuong',
    [
      { venue: 'quan an nguyen duong' },
      { street: 'trung nu vuong' }
    ]
  )

  assert(
    'trung tam giao duc quoc phong quan khu 5',
    [
      { venue: 'trung tam giao duc quoc phong quan khu 5' }
    ]
  )
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`venue: ${name}`, testFunction)
  }

  testcase(test, common)
}
