const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('23 nguyen van linh', [
    { housenumber: '23' },
    { street: 'nguyen van linh' }
  ])

  assert('23A nguyen van linh', [
    { housenumber: '23A' },
    { street: 'nguyen van linh' }
  ])

  assert('12-14 nguyen van linh', [
    { housenumber: '12-14' },
    { street: 'nguyen van linh' }
  ])

  assert('12-14b nguyen van linh', [
    { housenumber: '12-14b' },
    { street: 'nguyen van linh' }
  ])

  assert('12/14 nguyen van linh', [
    { housenumber: '12/14' },
    { street: 'nguyen van linh' }
  ])

  assert('12/14 nguyen van linh', [
    { housenumber: '12/14' },
    { street: 'nguyen van linh' }
  ])

  assert('12a/14 nguyen van linh', [
    { housenumber: '12a/14' },
    { street: 'nguyen van linh' }
  ])

  assert('1/2/3/4/5/6 nguyen van linh', [
    { housenumber: '1/2/3/4/5/6' },
    { street: 'nguyen van linh' }
  ])

  assert('k448 nguyen van linh', [
    { housenumber: 'k448' },
    { street: 'nguyen van linh' }
  ])

  assert('h18/12 nguyen van linh', [
    { housenumber: 'h18/12' },
    { street: 'nguyen van linh' }
  ])

  assert('k448 h20/100 nguyen van linh', [
    { housenumber: 'k448 h20/100' },
    { street: 'nguyen van linh' }
  ])

  assert('so 2 nguyen van linh', [
    { housenumber: 'so 2' },
    { street: 'nguyen van linh' }
  ])

  assert('ngo 2 nguyen van linh', [
    { housenumber: 'ngo 2' },
    { street: 'nguyen van linh' }
  ])

  assert('ngach 2 nguyen van linh', [
    { housenumber: 'ngach 2' },
    { street: 'nguyen van linh' }
  ])

  assert('kiet 2 nguyen van linh', [
    { housenumber: 'kiet 2' },
    { street: 'nguyen van linh' }
  ])

  assert('hem 2 nguyen van linh', [
    { housenumber: 'hem 2' },
    { street: 'nguyen van linh' }
  ])

  assert('kiet 400 hem 10 nguyen van linh', [
    { housenumber: 'kiet 400 hem 10' },
    { street: 'nguyen van linh' }
  ])

  assert('125/, dinh tien hoang, phuong 3, binh thanh, ho chi minh', [
    { housenumber: '125/' },
    { street: 'dinh tien hoang' },
    { level3: 'phuong 3' },
    { level2: 'binh thanh' },
    { level1: 'ho chi minh' }
  ])

  assert('cafe Long 1 so 2 quang trung da nang', [
    { housenumber: 'so 2' },
    { street: 'quang trung' },
    { level1: 'da nang' }
  ])
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`house number: ${name}`, testFunction)
  }

  testcase(test, common)
}
