const HouseNumberClassification = require('../../classification/HouseNumberClassification')

module.exports = [
  {
    confidence: 0.9,
    Class: HouseNumberClassification,
    scheme: [
      {
        is: ['HouseNumberComponentClassification'],
        not: []
      },
      {
        is: ['HouseNumberComponentClassification'],
        not: []
      }
    ]
  },
  {
    confidence: 1.0,
    Class: HouseNumberClassification,
    scheme: [
      {
        is: ['HouseNumberComponentClassification'],
        not: []
      },
      {
        is: ['HouseNumberComponentClassification'],
        not: []
      },

      {
        is: ['HouseNumberComponentClassification'],
        not: []
      }
    ]
  }
]
