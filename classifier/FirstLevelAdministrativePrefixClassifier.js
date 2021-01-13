const PhraseClassifier = require('./super/PhraseClassifier')
const FirstLevelAdministrativePrefixClassification = require('../classification/FirstLevelAdministrativePrefixClassification')

class FirstLevelAdministrativePrefixClassifier extends PhraseClassifier {
  setup () {
    this.index = {}

    this.index['thanh pho'] = true
    this.index['tp.'] = true
    this.index.tp = true
    this.index.tinh = true
  }

  each (span) {
    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new FirstLevelAdministrativePrefixClassification(1))
    }
  }
}

module.exports = FirstLevelAdministrativePrefixClassifier
