const StreetClassification = require('../../classification/StreetClassification')

module.exports = [
  {
    // Rue Montmartre or Boulevard Charles De Gaulle
    confidence: 0.88,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification']
      },
      {
        is: ['AlphaClassification'],
        not: ['StreetClassification']
      }
    ]
  }
]
