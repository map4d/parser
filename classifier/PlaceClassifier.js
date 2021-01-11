const PhraseClassifier = require('./super/PhraseClassifier')
const PlaceClassification = require('../classification/PlaceClassification')
const libpostal = require('../resources/libpostal/libpostal')

class PlaceClassifier extends PhraseClassifier {
  setup () {
    // load index tokens
    this.index = {}
    libpostal.load(this.index, ['vn'], 'place_names.txt')
    libpostal.generatePlurals(this.index)
  }

  each (span) {
    // skip spans which contain numbers
    if (span.contains.numerals) { return }

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new PlaceClassification(1.0))
    }
  }
}

module.exports = PlaceClassifier
