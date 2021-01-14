const PhraseClassifier = require('./super/PhraseClassifier')
const StreetPrefixClassification = require('../classification/StreetPrefixClassification')
const libpostal = require('../resources/libpostal/libpostal')

// dictionaries sourced from the libpostal project
// see: https://github.com/openvenues/libpostal

class StreetPrefixClassifier extends PhraseClassifier {
  setup () {
    // load street tokens
    this.index = {}
    libpostal.load(this.index, ['vn'], 'street_prefixes.txt')
  }

  each (span) {
    // skip spans which contain numbers
    if (span.contains.numerals) { return }

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      // classify phrase
      span.classify(new StreetPrefixClassification(1.0))

      // classify child spans
      span.graph.findAll('child').forEach(c => c.classify(new StreetPrefixClassification(1.0)))
    }
  }
}

module.exports = StreetPrefixClassifier
