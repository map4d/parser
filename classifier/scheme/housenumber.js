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
