const FirstLevelAdministrativeClassification = require('../../classification/FirstLevelAdministrativeClassification')

module.exports = [
  {
    confidence: 1.0,
    Class: FirstLevelAdministrativeClassification,
    scheme: [
      {
        is: ['FirstLevelAdministrativePrefixClassification'],
        not: []
      },
      {
        is: ['FirstLevelAdministrativeClassification'],
        not: []
      }
    ]
  }
]
