const PhraseClassifier = require('./super/PhraseClassifier')
const ExclusionClassification = require('../classification/ExclusionClassification')
const libpostal = require('../resources/libpostal/libpostal')

class ExclusionClassifier extends PhraseClassifier {
  setup () {
    this.index = {}
    libpostal.load(this.index, ['vn'], 'exclusions.txt')
  }

  each (span) {
    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      // classify child spans
      span.graph.findAll('child').forEach(c => c.classify(new ExclusionClassification()))
    }
  }
}

module.exports = ExclusionClassifier
