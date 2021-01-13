const PhraseClassifier = require('./super/PhraseClassifier')
const SecondLevelAdministrativeClassification = require('../classification/SecondLevelAdministrativeClassification')
const libpostal = require('../resources/libpostal/libpostal')

class SecondLevelAdministrativeClassifier extends PhraseClassifier {
  setup () {
    this.index = {}
    libpostal.load(this.index, ['vn'], 'level2_names.txt', { lowercase: true })
  }

  each (span) {
    // do not classify tokens if they already have a 'StreetClassification'
    if (span.classifications.hasOwnProperty('StreetClassification') || (
      span.graph.length('child') > 0 &&
          span.graph.findOne('child').classifications.hasOwnProperty('StreetClassification')
    )
    ) { return }

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new SecondLevelAdministrativeClassification(1))
    }
  }
}

module.exports = SecondLevelAdministrativeClassifier