const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('viet nam', [{ country: 'viet nam' }])

  assert('da nang', [{ level1: 'da nang' }])

  assert('quan hai chau', [{ level2: 'quan hai chau' }])

  assert('hai chau', [{ level2: 'hai chau' }])

  assert('hoa thuan dong', [{ level3: 'hoa thuan dong' }])

  assert('phuong hoa thuan dong', [{ level3: 'phuong hoa thuan dong' }])

  assert('trung nu vuong', [{ street: 'trung nu vuong' }])

  assert('quan bun co tam K448 H20/2 hoang dieu da nang', [
    { housenumber: 'K448 H20/2' },
    { street: 'hoang dieu' },
    { level1: 'da nang' }
  ])

  assert('1 cuon vao so 2 quang trung', [
    { housenumber: 'so 2' },
    { street: 'quang trung' }
  ])

  assert('23 nguyen van linh da nang', [
    { housenumber: '23' },
    { street: 'nguyen van linh' },
    { level1: 'da nang' }
  ])

  assert('trung nu vuong phuong hoa thuan dong hai chau da nang vn', [
    { street: 'trung nu vuong' },
    { level3: 'phuong hoa thuan dong' },
    { level2: 'hai chau' },
    { level1: 'da nang' },
    { country: 'vn' }
  ])

  assert('cong vien 29 thang 3', undefined)

  assert('truong hoang dieu', undefined)

  assert('truong thpt cam le, hoa tho dong, cam le, da nang', [
    { level3: 'hoa tho dong' },
    { level2: 'cam le' },
    { level1: 'da nang' }
  ])

  assert('1  duong so 5 khu dan cu dai phuc binh hung Binh Chanh Ho Chi Minh', [
    { housenumber: '1' },
    { street: 'duong so 5' },
    { level3: 'binh hung' },
    { level2: 'Binh Chanh' },
    { level1: 'Ho Chi Minh' }
  ])

  assert('109 ton duc thang tp Vung Tau Ba Ria Vung Tau', [
    { housenumber: '109' },
    { street: 'ton duc thang' },
    { level2: 'tp Vung Tau' },
    { level1: 'Ba Ria Vung Tau' }
  ])
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`VN: ${name}`, testFunction)
  }

  testcase(test, common)
}
