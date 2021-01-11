const PhraseClassifier = require('./super/PhraseClassifier')
const StreetClassification = require('../classification/StreetClassification')
const libpostal = require('../resources/libpostal/libpostal')

class StreetNameClassifier extends PhraseClassifier {
  setup () {
    this.index = {}
    libpostal.load(this.index, ['vn'], 'street_names.txt', { lowercase: true })
  }

  each (span) {
    // viet nam street name contains number. Eg: duong 29 thang 3, duong so 1

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new StreetClassification(1))
    }
  }
}

module.exports = StreetNameClassifier
