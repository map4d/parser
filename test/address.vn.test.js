const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('viet nam', [{ level0: 'viet nam' }])

  assert('da nang', [{ level1: 'da nang' }])

  assert('quan hai chau', [{ level2: 'hai chau' }])

  assert('hai chau', [{ level2: 'hai chau' }])

  assert('hoa thuan dong', [{ level3: 'hoa thuan dong' }])

  assert('phuong hoa thuan dong', [{ level3: 'hoa thuan dong' }])

  assert('trung nu vuong', [{ street: 'trung nu vuong' }])

  assert('quan bun co tam k448 h20/2 hoang dieu da nang', [
    { housenumber: 'k448 h20/2' },
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
    { level3: 'hoa thuan dong' },
    { level2: 'hai chau' },
    { level1: 'da nang' },
    { level0: 'viet nam' }
  ])

  assert('cong vien 29 thang 3', undefined)

  assert('truong hoang dieu', undefined)

  assert('truong trung nu vuong', undefined)

  assert('truong thpt cam le, cam le, da nang', [
    { level2: 'cam le' },
    { level1: 'da nang' }
  ])

  assert('1  duong so 5 khu dan cu dai phuc binh hung binh chanh ho chi minh', [
    { housenumber: '1' },
    { street: 'duong so 5' },
    { level3: 'binh hung' },
    { level2: 'binh chanh' },
    { level1: 'ho chi minh' }
  ])

  assert('109 ton duc thang tp vung tau ba ria vung tau', [
    { housenumber: '109' },
    { street: 'ton duc thang' },
    { level2: 'vung tau' },
    { level1: 'ba ria vung tau' }
  ])

  assert('truong trung nu vuong da nang', [{ level1: 'da nang' }])

  assert('108 truong trung nu vuong da nang', [{ level1: 'da nang' }])

  assert('dai hoc duy tan da nang', [{ level1: 'da nang' }])

  assert('tt. ai nghia, dai loc, quang nam', [
    { level3: 'ai nghia' },
    { level2: 'dai loc' },
    { level1: 'quang nam' }
  ])

  assert('kiet 24/3 duong le duan da nang', [
    { housenumber: 'kiet 24/3' },
    { street: 'duong le duan' },
    { level1: 'da nang' }
  ])

  assert('huyen tran cong chua ho chi minh', [
    { street: 'huyen tran cong chua' },
    { level1: 'ho chi minh' }
  ])

  assert(
    '4429a  nha hang dai hy, nguyen cuu phu, tan tao a, binh tan, ho chi minh',
    [
      { street: 'nguyen cuu phu' },
      { level3: 'tan tao a' },
      { level2: 'binh tan' },
      { level1: 'ho chi minh' }
    ]
  )

  assert(
    '><  chung cu conic, nguyen van linh  huong ve quan 7, binh chanh, ho chi minh',
    [
      { street: 'nguyen van linh' },
      { level2: 'binh chanh' },
      { level1: 'ho chi minh' }
    ]
  )

  assert(
    '007 -  lo f, chung cu   xom cai, 5, ho chi minh',
    [
      { level1: 'ho chi minh' }
    ]
  )

  assert(
    'truong trung nu vuong da nang hai phong',
    [
      { street: 'da nang' },
      { level1: 'hai phong' }
    ]
  )

  assert(
    'truong dh hong bang, dien bien phu, 15, binh thanh, ho chi minh',
    [
      { street: 'dien bien phu' },
      { level2: 'binh thanh' },
      { level1: 'ho chi minh' }
    ]
  )

  assert(
    'trung tam thuong mai nguyen kim hai phong da nang',
    [
      { street: 'hai phong' },
      { level1: 'da nang' }
    ]
  )

  assert(
    'trung tam dien may nguyen kim hai phong da nang',
    [
      { street: 'hai phong' },
      { level1: 'da nang' }
    ]
  )

  assert(
    'duong nguyen thi minh khai, trung tam anh ngu hoang dieu, da nang',
    [
      { street: 'duong nguyen thi minh khai' },
      { level1: 'da nang' }
    ]
  )

  assert(
    '04 tran quang khai, hue',
    [
      { housenumber: '04' },
      { street: 'tran quang khai' },
      { level2: 'hue' }
    ]
  )

  assert(
    'khu cong nghiep an don, son tra, da nang, 550000 duong so 1, phuong an hai bac, quan son tra, thanh pho da nang, viet nam',
    [
      { postcode: '550000' },
      { street: 'duong so 1' },
      { level3: 'an hai bac' },
      { level2: 'son tra' },
      { level1: 'da nang' },
      { level0: 'viet nam' }
    ]
  )

  assert(
    '09, tran quang dieu, tp. vung tau, ba ria vung tau',
    [
      { housenumber: '09' },
      { street: 'tran quang dieu' },
      { level2: 'vung tau' },
      { level1: 'ba ria vung tau' }
    ]
  )

  assert(
    '04, tran quang khai, hue',
    [
      { housenumber: '04' },
      { street: 'tran quang khai' },
      { level2: 'hue' }
    ]
  )

  assert(
    '02, le thanh nghi, da nang',
    [
      { housenumber: '02' },
      { street: 'le thanh nghi' },
      { level1: 'da nang' }
    ]
  )

  assert(
    '104---chung cu botanica, pho quang, tan binh, ho chi minh',
    [
      { street: 'pho quang' },
      { level2: 'tan binh' },
      { level1: 'ho chi minh' }
    ]
  )

  assert(
    '118  -  chung cu tan huong, tan huong, quan tan phu, thanh pho ho chi minh',
    [
      { street: 'tan huong' },
      { level2: 'tan phu' },
      { level1: 'ho chi minh' }
    ]
  )

  assert(
    'ho boi nuoc nong da nang',
    [
      { level1: 'da nang' }
    ]
  )

  assert('trung tam giao duc quoc phong quan khu 5', undefined)

  assert(
    'truong duy tan co so 2 nguyen van linh da nang',
    [
      { street: 'nguyen van linh' },
      { level1: 'da nang' }
    ]
  )

  assert(
    'truong duy tan cs 2 nguyen van linh da nang',
    [
      { street: 'nguyen van linh' },
      { level1: 'da nang' }
    ]
  )
}

module.exports.all = (tape, common) => {
  function test (name, testfunction) {
    return tape(`vn: ${name}`, testfunction)
  }

  testcase(test, common)
}
