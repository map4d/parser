const VenueClassification = require('../../classification/VenueClassification')

module.exports = [
  {
    confidence: 0.72,
    Class: VenueClassification,
    scheme: [
      {
        is: ['PlaceClassification'],
        not: []
      },
      {
        is: ['PlaceNameClassification'],
        not: []
      }
    ]
  },
  {
    // dai hoc da nang
    confidence: 0.7,
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
    confidence: 0.7,
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
    // quan bun o trang
    confidence: 0.6,
    Class: VenueClassification,
    scheme: [
      {
        is: ['PlaceClassification'],
        not: []
      },
      {
        is: ['PersonalTitleClassification'],
        not: []
      },
      {
        is: ['GivenNameClassification'],
        not: []
      }
    ]
  },
  {
    confidence: 0.65,
    Class: VenueClassification,
    scheme: [
      {
        is: ['PlaceClassification'],
        not: []
      },
      {
        is: ['SurnameClassification'],
        not: []
      },
      {
        is: ['GivenNameClassification'],
        not: []
      }
    ]
  },
  {
    confidence: 0.65,
    Class: VenueClassification,
    scheme: [
      {
        is: ['PlaceClassification'],
        not: []
      },
      {
        is: ['SurnameClassification'],
        not: []
      },
      {
        is: ['MiddleNameClassification'],
        not: []
      },
      {
        is: ['GivenNameClassification'],
        not: []
      }
    ]
  },
  {
    confidence: 0.51,
    Class: VenueClassification,
    scheme: [
      {
        is: ['PlaceClassification'],
        not: []
      },
      {
        is: ['SurnameClassification'],
        not: []
      },
      {
        is: ['MiddleNameClassification'],
        not: []
      },
      {
        is: ['MiddleNameClassification'],
        not: []
      },
      {
        is: ['GivenNameClassification'],
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
        is: ['GivenNameClassification'],
        not: []
      }
    ]
  },
  {
    confidence: 0.4,
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
