const StreetClassification = require('../../classification/StreetClassification')

module.exports = [
  {
    // Main Street
    confidence: 0.82,
    Class: StreetClassification,
    scheme: [
      {
        is: ['AlphaClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // Rue Montmartre or Boulevard Charles De Gaulle
    confidence: 0.88,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['AlphaClassification', 'PersonClassification', 'StreetNameClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // 26 Street
    confidence: 0.86,
    Class: StreetClassification,
    scheme: [
      {
        is: ['NumericClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification', 'RoadTypeClassification']
      }
    ]
  },
  {
    // St Kilda Road
    confidence: 0.85,
    Class: StreetClassification,
    scheme: [
      {
        is: ['PersonalSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // Martin Luther King Blvd.
    confidence: 0.82,
    Class: StreetClassification,
    scheme: [
      {
        is: ['PersonClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // Martin Luther King Jr. Blvd.
    confidence: 0.81,
    Class: StreetClassification,
    scheme: [
      {
        is: ['PersonClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['PersonalSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // Rue Saint Anne
    confidence: 0.91,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['PersonalTitleClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['AlphaClassification', 'GivenNameClassification', 'PersonClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // Avenue Aristide Briand or Allée Victor Hugo
    confidence: 0.92,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['GivenNameClassification', 'AlphaClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['SurnameClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // +++ Main Street
    confidence: 0.84,
    Class: StreetClassification,
    scheme: [
      {
        is: ['AlphaClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetClassification'],
        not: ['DirectionalClassification']
      }
    ]
  },
  {
    // Highway 27
    confidence: 0.84,
    Class: StreetClassification,
    scheme: [
      {
        is: ['RoadTypeClassification'],
        not: []
      },
      {
        is: ['NumericClassification'],
        not: []
      }
    ]
  },
  {
    // +++ +++ Main Street
    confidence: 0.84,
    Class: StreetClassification,
    scheme: [
      {
        is: ['AlphaClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetClassification'],
        not: ['DirectionalClassification']
      }
    ]
  },
  {
    // Main Street West
    confidence: 0.88,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetClassification'],
        not: ['DirectionalClassification']
      },
      {
        is: ['DirectionalClassification'],
        not: ['StreetClassification', 'IntersectionClassification', 'EndTokenSingleCharacterClassification']
      }
    ]
  },
  {
    // West Main Street
    confidence: 0.88,
    Class: StreetClassification,
    scheme: [
      {
        is: ['DirectionalClassification'],
        not: ['StreetClassification', 'IntersectionClassification', 'EndTokenSingleCharacterClassification']
      },
      {
        is: ['StreetClassification'],
        not: ['DirectionalClassification']
      }
    ]
  }
]
