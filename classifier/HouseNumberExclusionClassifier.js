const PhraseClassifier = require('./super/PhraseClassifier')
const HouseNumberExclusionClassification = require('../classification/HouseNumberExclusionClassification')
const libpostal = require('../resources/libpostal/libpostal')

class HouseNumberExclusionClassifier extends PhraseClassifier {
  setup () {
    this.index = {}

    libpostal.load(this.index, ['vn'], 'housenumber_exclusions.txt')
  }

  each (span) {
    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      // classify child spans
      span.graph.findAll('child').forEach(c => c.classify(new HouseNumberExclusionClassification()))
    }
  }
}

module.exports = HouseNumberExclusionClassifier
