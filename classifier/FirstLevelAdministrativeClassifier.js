const PhraseClassifier = require('./super/PhraseClassifier')
const FirstLevelAdministrativeClassification = require('../classification/FirstLevelAdministrativeClassification')
const libpostal = require('../resources/libpostal/libpostal')

class FirstLevelAdministrativeClassifier extends PhraseClassifier {
  setup () {
    this.index = {}
    libpostal.load(this.index, ['vn'], 'level1_names.txt', { lowercase: true })
  }

  each (span) {
    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new FirstLevelAdministrativeClassification(1))
    }
  }
}

module.exports = FirstLevelAdministrativeClassifier
