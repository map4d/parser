const PhraseClassifier = require('./super/PhraseClassifier')
const ThirdLevelAdministrativeClassification = require('../classification/ThirdLevelAdministrativeClassification')
const libpostal = require('../resources/libpostal/libpostal')

class ThirdLevelAdministrativeClassifier extends PhraseClassifier {
  setup () {
    this.index = {}
    libpostal.load(this.index, ['vn'], 'level3_names.txt', { lowercase: true })
  }

  each (span) {
    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new ThirdLevelAdministrativeClassification(1))
    }
  }
}

module.exports = ThirdLevelAdministrativeClassifier
