const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('viet nam', [{ level0: 'viet nam' }])

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
    { level0: 'vn' }
  ])

  assert('cong vien 29 thang 3', undefined)

  assert('truong hoang dieu', undefined)

  assert('truong trung nu vuong', undefined)

  assert('truong thpt cam le, cam le, da nang', [
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

  assert('truong trung nu vuong da nang', [{ level1: 'da nang' }])

  assert('108 truong trung nu vuong da nang', [{ level1: 'da nang' }])

  assert('Dai hoc Duy Tan Da Nang', [{ level1: 'Da Nang' }])

  assert('tt. Ai Nghia, Dai Loc, Quang Nam', [
    { level3: 'Ai Nghia' },
    { level2: 'Dai Loc' },
    { level1: 'Quang Nam' }
  ])

  assert('Kiet 24/3 Duong Le Duan Da Nang', [
    { housenumber: '24/3' },
    { street: 'Duong Le Duan' },
    { level1: 'Da Nang' }
  ])

  assert('huyen tran cong chua ho chi minh', [
    { street: 'huyen tran cong chua' },
    { level1: 'ho chi minh' }
  ])

  assert(
    '4429a  nha hang dai hy, Nguyen Cuu Phu, tan tao a, Binh Tan, Ho Chi Minh',
    [
      { street: 'Nguyen Cuu Phu' },
      { level3: 'tan tao a' },
      { level2: 'Binh Tan' },
      { level1: 'Ho Chi Minh' }
    ]
  )

  assert(
    '><  chung cu conic, Nguyen Van Linh  huong ve quan 7, Binh Chanh, Ho Chi Minh',
    [
      { street: 'Nguyen Van Linh' },
      { level2: 'Binh Chanh' },
      { level1: 'Ho Chi Minh' }
    ]
  )

  assert(
    '007 -  Lo F, chung cu   Xom Cai, 5, Ho Chi Minh',
    [
      { level1: 'Ho Chi Minh' }
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
    'truong DH hong bang, Dien Bien Phu, 15, Binh Thanh, Ho Chi Minh',
    [
      { street: 'Dien Bien Phu' },
      { level2: 'Binh Thanh' },
      { level1: 'Ho Chi Minh' }
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
    '04 Tran Quang Khai, Hue',
    [
      { housenumber: '04' },
      { street: 'Tran Quang Khai' },
      { level2: 'Hue' }
    ]
  )

  assert(
    'Khu Cong Nghiep An Don, Son Tra, Da Nang, 550000 Duong So 1, Phuong An Hai Bac, Quan Son Tra, Thanh pho Da Nang, Viet Nam',
    [
      { postcode: '550000' },
      { street: 'Duong So 1' },
      { level3: 'Phuong An Hai Bac' },
      { level2: 'Quan Son Tra' },
      { level1: 'Thanh pho Da Nang' },
      { level0: 'Viet Nam' }
    ]
  )

  assert(
    '09, TRAN QUANG DIEU, tp. Vung Tau, Ba Ria Vung Tau',
    [
      { housenumber: '09' },
      { street: 'TRAN QUANG DIEU' },
      { level2: 'tp. Vung Tau' },
      { level1: 'Ba Ria Vung Tau' }
    ]
  )

  assert(
    '04, Tran Quang Khai, Hue',
    [
      { housenumber: '04' },
      { street: 'Tran Quang Khai' },
      { level2: 'Hue' }
    ]
  )

  assert(
    '02, Le Thanh Nghi, Da Nang',
    [
      { housenumber: '02' },
      { street: 'Le Thanh Nghi' },
      { level1: 'Da Nang' }
    ]
  )

  assert(
    '104---chung cu botanica, pho quang, Tan Binh, Ho Chi Minh',
    [
      { street: 'pho quang' },
      { level2: 'Tan Binh' },
      { level1: 'Ho Chi Minh' }
    ]
  )

  assert(
    '118  -  chung cu tan huong, tan huong, Tan Phu, Ho Chi Minh',
    [
      { street: 'tan huong' },
      { level2: 'Tan Phu' },
      { level1: 'Ho Chi Minh' }
    ]
  )
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`VN: ${name}`, testFunction)
  }

  testcase(test, common)
}
