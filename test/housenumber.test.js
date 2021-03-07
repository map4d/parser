const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('23 nguyen van linh', [
    { housenumber: '23' },
    { street: 'nguyen van linh' }
  ])

  assert('23a nguyen van linh', [
    { housenumber: '23a' },
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
    { level4: 'phuong 3' },
    { level3: 'binh thanh' },
    { level2: 'ho chi minh' }
  ])

  assert('cafe long 1 so 2 quang trung da nang', [
    { housenumber: 'so 2' },
    { street: 'quang trung' },
    { level2: 'da nang' }
  ])

  assert('188-189-190 nguyen van linh', [
    { housenumber: '188-189-190' },
    { street: 'nguyen van linh' }
  ])

  assert('188-189-190-191a nguyen van linh', [
    { housenumber: '188-189-190-191a' },
    { street: 'nguyen van linh' }
  ])

  assert('a12-a13 nguyen van linh', [
    { housenumber: 'a12-a13' },
    { street: 'nguyen van linh' }
  ])

  assert('p1-23 nguyen van linh', [
    { housenumber: 'p1-23' },
    { street: 'nguyen van linh' }
  ])

  assert('12a-12-12-13a nguyen van linh', [
    { housenumber: '12a-12-12-13a' },
    { street: 'nguyen van linh' }
  ])

  assert('lo 32 nguyen van linh', [
    { housenumber: 'lo 32' },
    { street: 'nguyen van linh' }
  ])

  assert('lo 32a nguyen van linh', [
    { housenumber: 'lo 32a' },
    { street: 'nguyen van linh' }
  ])

  assert('lo a68 nguyen van linh', [
    { housenumber: 'lo a68' },
    { street: 'nguyen van linh' }
  ])

  assert('lo 6/a64/54a/54 nguyen van linh', [
    { housenumber: 'lo 6/a64/54a/54' },
    { street: 'nguyen van linh' }
  ])

  assert('18bis nguyen van linh', [
    { housenumber: '18bis' },
    { street: 'nguyen van linh' }
  ])

  assert('18bis/12/1 nguyen van linh', [
    { housenumber: '18bis/12/1' },
    { street: 'nguyen van linh' }
  ])

  assert('18bis/2a/a2 nguyen van linh', [
    { housenumber: '18bis/2a/a2' },
    { street: 'nguyen van linh' }
  ])

  assert('a16 nguyen van linh', [
    { housenumber: 'a16' },
    { street: 'nguyen van linh' }
  ])

  assert('z16/23 nguyen van linh', [
    { housenumber: 'z16/23' },
    { street: 'nguyen van linh' }
  ])

  assert('1052/52e nguyen van linh', [
    { housenumber: '1052/52e' },
    { street: 'nguyen van linh' }
  ])

  assert('khu pho 9 nguyen van linh', [
    { street: 'nguyen van linh' }
  ])

  assert('truong trung hoc pho thong so 1 nguyen van linh', [
    { street: 'nguyen van linh' }
  ])

  assert('cau lac bo so 1 nguyen van linh', [
    { street: 'nguyen van linh' }
  ])

  assert('khu dan cu so 2 nguyen van linh', [
    { street: 'nguyen van linh' }
  ])

  assert('to dan pho so 3 nguyen van linh', [
    { street: 'nguyen van linh' }
  ])
}

module.exports.all = (tape, common) => {
  function test (name, testfunction) {
    return tape(`house number: ${name}`, testfunction)
  }

  testcase(test, common)
}
