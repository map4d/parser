const WordClassifier = require('./super/WordClassifier')
const GivenNameClassification = require('../classification/GivenNameClassification')
const libpostal = require('../resources/libpostal/libpostal')

class GivenNameClassifier extends WordClassifier {
  setup () {
    // load index tokens
    this.index = {}
    libpostal.load(this.index, ['vn'], 'given_names.txt')
  }

  each (span) {
    // skip spans which contain numbers
    if (span.contains.numerals) { return }

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new GivenNameClassification(1.0))
    }
  }
}

module.exports = GivenNameClassifier
