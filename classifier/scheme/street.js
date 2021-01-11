const StreetClassification = require('../../classification/StreetClassification')

module.exports = [
  {
    confidence: 1.0,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'PlaceClassification']
      },
      {
        is: ['StreetClassification'],
        not: []
      }
    ]
  }
]
