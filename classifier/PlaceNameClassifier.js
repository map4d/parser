const PhraseClassifier = require('./super/PhraseClassifier')
const PlaceNameClassification = require('../classification/PlaceNameClassification')
const libpostal = require('../resources/libpostal/libpostal')

class PlaceNameClassifier extends PhraseClassifier {
  setup () {
    // load index tokens
    this.index = {}
    libpostal.load(this.index, ['vn'], 'place_names.txt')
    libpostal.generatePlurals(this.index)
  }

  each (span) {
    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new PlaceNameClassification(1.0))
    }
  }
}

module.exports = PlaceNameClassifier
