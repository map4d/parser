const WordClassifier = require('./super/WordClassifier')
const MiddleNameClassification = require('../classification/MiddleNameClassification')
const libpostal = require('../resources/libpostal/libpostal')

class MiddleNameClassifier extends WordClassifier {
  setup () {
    // load index tokens
    this.index = {}
    libpostal.load(this.index, ['vn'], 'middle_names.txt')
  }

  each (span) {
    // skip spans which contain numbers
    if (span.contains.numerals) { return }

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new MiddleNameClassification(1.0))
    }
  }
}

module.exports = MiddleNameClassifier
