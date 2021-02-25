const WordClassifier = require('./super/WordClassifier')
const SurnameClassification = require('../classification/SurnameClassification')
const libpostal = require('../resources/libpostal/libpostal')

class SurnameClassifier extends WordClassifier {
  setup () {
    // load index tokens
    this.index = {}
    libpostal.load(this.index, ['vn'], 'surnames.txt')
  }

  each (span) {
    // skip spans which contain numbers
    if (span.contains.numerals) { return }

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new SurnameClassification(1.0))
    }
  }
}

module.exports = SurnameClassifier
