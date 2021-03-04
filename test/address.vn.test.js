const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('viet nam', [{ level1: 'viet nam' }])

  assert('da nang', [{ level2: 'da nang' }])

  assert('quan hai chau', [{ level3: 'hai chau' }])

  assert('hai chau', [{ level3: 'hai chau' }])

  assert('hoa thuan dong', [{ level4: 'hoa thuan dong' }])

  assert('phuong hoa thuan dong', [{ level4: 'hoa thuan dong' }])

  assert('trung nu vuong', [{ street: 'trung nu vuong' }])

  assert('quan bun co tam k448 h20/2 hoang dieu da nang', [
    { housenumber: 'k448 h20/2' },
    { street: 'hoang dieu' },
    { level2: 'da nang' }
  ])

  assert('1 cuon vao so 2 quang trung', [
    { housenumber: 'so 2' },
    { street: 'quang trung' }
  ])

  assert('23 nguyen van linh da nang', [
    { housenumber: '23' },
    { street: 'nguyen van linh' },
    { level2: 'da nang' }
  ])

  assert('trung nu vuong phuong hoa thuan dong hai chau da nang vn', [
    { street: 'trung nu vuong' },
    { level4: 'hoa thuan dong' },
    { level3: 'hai chau' },
    { level2: 'da nang' },
    { level1: 'viet nam' }
  ])

  assert('cong vien 29 thang 3', undefined)

  assert('truong hoang dieu', undefined)

  assert('truong trung nu vuong', undefined)

  assert('truong thpt cam le, cam le, da nang', [
    { level3: 'cam le' },
    { level2: 'da nang' }
  ])

  assert('1  duong so 5 khu dan cu dai phuc binh hung binh chanh ho chi minh', [
    { housenumber: '1' },
    { street: 'duong so 5' },
    { level4: 'binh hung' },
    { level3: 'binh chanh' },
    { level2: 'ho chi minh' }
  ])

  assert('109 ton duc thang tp vung tau ba ria vung tau', [
    { housenumber: '109' },
    { street: 'ton duc thang' },
    { level3: 'vung tau' },
    { level2: 'ba ria vung tau' }
  ])

  assert('truong trung nu vuong da nang', [{ level2: 'da nang' }])

  assert('108 truong trung nu vuong da nang', [{ level2: 'da nang' }])

  assert('dai hoc duy tan da nang', [{ level2: 'da nang' }])

  assert('tt. ai nghia, dai loc, quang nam', [
    { level4: 'ai nghia' },
    { level3: 'dai loc' },
    { level2: 'quang nam' }
  ])

  assert('kiet 24/3 duong le duan da nang', [
    { housenumber: 'kiet 24/3' },
    { street: 'le duan' },
    { level2: 'da nang' }
  ])

  assert('huyen tran cong chua ho chi minh', [
    { street: 'huyen tran cong chua' },
    { level2: 'ho chi minh' }
  ])

  assert(
    '4429a  nha hang dai hy, nguyen cuu phu, tan tao a, binh tan, ho chi minh',
    [
      { street: 'nguyen cuu phu' },
      { level4: 'tan tao a' },
      { level3: 'binh tan' },
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    '><  chung cu conic, nguyen van linh  huong ve quan 7, binh chanh, ho chi minh',
    [
      { level3: 'binh chanh' },
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    '007 -  lo f, chung cu   xom cai, 5, ho chi minh',
    [
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    'truong trung nu vuong da nang hai phong',
    [
      { street: 'da nang' },
      { level2: 'hai phong' }
    ]
  )

  assert(
    'truong dh hong bang, dien bien phu, 15, binh thanh, ho chi minh',
    [
      { street: 'dien bien phu' },
      { level3: 'binh thanh' },
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    'trung tam thuong mai nguyen kim hai phong da nang',
    [
      { street: 'hai phong' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'trung tam dien may nguyen kim hai phong da nang',
    [
      { street: 'hai phong' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'duong nguyen thi minh khai, trung tam anh ngu hoang dieu, da nang',
    [
      { street: 'nguyen thi minh khai' },
      { level2: 'da nang' }
    ]
  )

  assert(
    '04 tran quang khai, hue',
    [
      { housenumber: '04' },
      { street: 'tran quang khai' },
      { level3: 'hue' }
    ]
  )

  assert(
    'khu cong nghiep an don, son tra, da nang, 550000 duong so 1, phuong an hai bac, quan son tra, thanh pho da nang, viet nam',
    [
      { postcode: '550000' },
      { street: 'duong so 1' },
      { level4: 'an hai bac' },
      { level3: 'son tra' },
      { level2: 'da nang' },
      { level1: 'viet nam' }
    ]
  )

  assert(
    '09, tran quang dieu, tp. vung tau, ba ria vung tau',
    [
      { housenumber: '09' },
      { street: 'tran quang dieu' },
      { level3: 'vung tau' },
      { level2: 'ba ria vung tau' }
    ]
  )

  assert(
    '04, tran quang khai, hue',
    [
      { housenumber: '04' },
      { street: 'tran quang khai' },
      { level3: 'hue' }
    ]
  )

  assert(
    '02, le thanh nghi, da nang',
    [
      { housenumber: '02' },
      { street: 'le thanh nghi' },
      { level2: 'da nang' }
    ]
  )

  assert(
    '104---chung cu botanica, pho quang, tan binh, ho chi minh',
    [
      { street: 'pho quang' },
      { level3: 'tan binh' },
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    '118  -  chung cu tan huong, tan huong, quan tan phu, thanh pho ho chi minh',
    [
      { street: 'tan huong' },
      { level3: 'tan phu' },
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    'ho boi nuoc nong da nang',
    [
      { level2: 'da nang' }
    ]
  )

  assert('trung tam giao duc quoc phong quan khu 5', undefined)

  assert(
    'truong duy tan co so 2 nguyen van linh da nang',
    [
      { street: 'nguyen van linh' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'truong duy tan cs 2 nguyen van linh da nang',
    [
      { street: 'nguyen van linh' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'cho bac my an ho chi minh',
    [
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    'massage hoang nhi hoa thuan dong quan hai chau thanh pho da nang',
    [
      { level4: 'hoa thuan dong' },
      { level3: 'hai chau' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'massage hoang nhi quan hai chau hoa thuan dong thanh pho da nang',
    [
      { level3: 'hai chau' },
      { level4: 'hoa thuan dong' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'massage hoang nhi quan hai chau thanh pho da nang hoa thuan dong',
    [
      { level3: 'hai chau' },
      { level2: 'da nang' },
      { level4: 'hoa thuan dong' }
    ]
  )

  assert(
    'massage hoang nhi quan hai chau ha tinh hoa thuan dong',
    [
      { level4: 'hoa thuan dong' }
    ]
  )

  assert(
    'massage a-z ha tinh quan hai chau hoa thuan dong',
    [
      { level3: 'hai chau' },
      { level4: 'hoa thuan dong' }
    ]
  )

  assert(
    'massage a-y phuong hoa thuan dong quan 1 ho chi minh',
    [
      { level3: 'quan 1' },
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    'massage a-y dong quan 1 ho chi minh',
    [
      { level3: 'quan 1' },
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    '(khach san phung hoang) 10, duong so 32 khu ao sen, binh tri dong b, Binh Tan, Ho Chi Minh',
    [
      { housenumber: '10' },
      { street: 'duong so 32' },
      { level4: 'binh tri dong b' },
      { level3: 'binh tan' },
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    'duong so 3, da nang',
    [
      { street: 'duong so 3' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'duong duong so 3, da nang',
    [
      { street: 'duong so 3' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'duong 152, da nang',
    [
      { street: 'duong 152' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'casio tttm takashimaya le loi',
    [
      { street: 'le loi' }
    ]
  )

  assert(
    'casio tttm takashimaya phuong le loi',
    [
      { level4: 'le loi' }
    ]
  )

  assert(
    'van phong giao dich hoang lan da nang',
    [
      { level2: 'da nang' }
    ]
  )

  assert('cau lac bo the duc the thao tao dan', undefined)

  assert('trung tam tieng anh', undefined)

  assert('san bong da nguyen chanh', undefined)

  assert(
    'trung tam thanh pho da nang',
    [
      { level2: 'da nang' }
    ]
  )

  assert(
    'trung tam tiec cuoi hoi nghi for you da nang',
    [
      { level2: 'da nang' }
    ]
  )

  assert(
    'trung tam the thao tuyen son, da nang',
    [
      { level2: 'da nang' }
    ]
  )

  assert(
    'quan che hoang dieu, le duan, da nang',
    [
      { street: 'le duan' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'my quang dung nguyen trung truc',
    [
      { street: 'nguyen trung truc' }
    ]
  )

  assert(
    'ben xe trung tam da nang',
    [
      { level2: 'da nang' }
    ]
  )

  assert(
    'cong an xa hoa chau',
    [
      { level4: 'hoa chau' }
    ]
  )

  assert(
    'le duan, phuong 06 quan 08 ho chi minh',
    [
      { street: 'le duan' },
      { level4: 'phuong 6' },
      { level3: 'quan 8' },
      { level2: 'ho chi minh' }
    ]
  )

  assert(
    'huyen tran cong chua my an hai chau',
    [
      { level3: 'hai chau' }
    ]
  )

  assert(
    'quan nam ranh da nang',
    [
      { level2: 'da nang' }
    ]
  )

  assert('phuc long coffee', undefined)

  assert('ca phe phuc long', undefined)

  assert(
    'buu dien huyen duy xuyen quang nam',
    [
      { level3: 'duy xuyen' },
      { level2: 'quang nam' }
    ]
  )

  assert(
    'yamaha 3s da nang',
    [
      { level2: 'da nang' }
    ]
  )

  assert(
    'nha tho la vang hai lang',
    [
      { level3: 'hai lang' }
    ]
  )

  assert(
    '23 duong so 1 truong trung nu vuong thanh pho da nang',
    [
      { housenumber: '23' },
      { street: 'duong so 1' },
      { level2: 'da nang' }
    ]
  )

  assert(
    'cau thu thiem binh an quan 2 cau thu thiem phuong an khanh quan 2',
    [
      { level4: 'an khanh' },
      { level3: 'quan 2' }
    ]
  )

  assert(
    'nguyen van duong hai chau',
    [
      { street: 'nguyen van duong' },
      { level3: 'hai chau' }
    ]
  )

  assert(
    'don duong lam dong',
    [
      { level3: 'don duong' },
      { level2: 'lam dong' }
    ]
  )
}

module.exports.all = (tape, common) => {
  function test (name, testfunction) {
    return tape(`vn: ${name}`, testfunction)
  }

  testcase(test, common)
}
