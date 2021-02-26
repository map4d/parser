const PhraseClassifier = require('./super/PhraseClassifier')
const StreetClassification = require('../classification/StreetClassification')
const StreetComponentClassification = require('../classification/StreetComponentClassification')
const libpostal = require('../resources/libpostal/libpostal')

class StreetClassifier extends PhraseClassifier {
  setup () {
    this.index = {}
    libpostal.load(this.index, ['vn'], 'street_names.txt', { lowercase: true })
  }

  each (span) {
    // viet nam street name contains number. Eg: duong 29 thang 3, duong so 1

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      let child = span.graph.findOne('child:first')
      let last = span.graph.findOne('child:last')
      let isValid = !last.classifications.hasOwnProperty('ExclusionClassification')

      while (isValid && child !== last && child) {
        isValid = !child.classifications.hasOwnProperty('ExclusionClassification')

        child = child.graph.findOne('next')
      }

      if (isValid) {
        // classify phrase
        span.classify(new StreetClassification(0.8))

        // classify child spans
        span.graph.findAll('child').forEach(c => c.classify(new StreetComponentClassification()))
      }
    }
  }
}

module.exports = StreetClassifier
