const VenueClassification = require('../../classification/VenueClassification')

module.exports = [
  {
    // dai hoc da nang
    confidence: 0.9,
    Class: VenueClassification,
    scheme: [
      {
        is: ['PlaceClassification'],
        not: []
      },
      {
        is: ['AdministrativeClassification'],
        not: []
      }
    ]
  },
  {
    // truong trung nu vuong
    confidence: 0.9,
    Class: VenueClassification,
    scheme: [
      {
        is: ['PlaceClassification'],
        not: []
      },
      {
        is: ['StreetClassification'],
        not: []
      }
    ]
  },
  {
    confidence: 0.5,
    Class: VenueClassification,
    scheme: [
      {
        is: ['PlaceClassification'],
        not: []
      },
      {
        is: ['AlphaClassification'],
        not: []
      }
    ]
  }
]
