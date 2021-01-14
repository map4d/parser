const HouseNumberClassification = require('../../classification/HouseNumberClassification')

module.exports = [
  {
    confidence: 1.0,
    Class: HouseNumberClassification,
    scheme: [
      {
        is: ['HouseNumberClassification'],
        not: []
      },
      {
        is: ['HouseNumberClassification'],
        not: []
      }
    ]
  },
  {
    confidence: 1.0,
    Class: HouseNumberClassification,
    scheme: [
      {
        is: ['HouseNumberClassification'],
        not: []
      },
      {
        is: ['HouseNumberClassification'],
        not: []
      },

      {
        is: ['HouseNumberClassification'],
        not: []
      }
    ]
  }
]
