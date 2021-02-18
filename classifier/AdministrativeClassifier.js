const PhraseClassifier = require('./super/PhraseClassifier')
const AdministrativeClassification = require('../classification/AdministrativeClassification')
const AdministrativeComponentClassification = require('../classification/AdministrativeComponentClassification')
const libpostal = require('../resources/libpostal/libpostal')

const administratives = {
  'level0': {
    file: 'level0_names.txt',
    level: 0,
    confidence: 1.0
  },
  'level1': {
    file: 'level1_names.txt',
    level: 1,
    confidence: 1.0
  },
  'level2': {
    file: 'level2_names.txt',
    level: 2,
    confidence: 0.8
  },
  'level3': {
    file: 'level3_names.txt',
    level: 3,
    confidence: 0.8
  }
}

class AdministrativeClassifier extends PhraseClassifier {
  setup () {
    this.index = {}

    Object.keys(administratives).forEach(level => {
      this.index[level] = new Set()
      libpostal.load(this.index[level], ['vn'], administratives[level].file, { lowercase: true })
    })
  }

  each (span) {
    let firstChild = span.graph.findOne('child:first') || span
    let prev = firstChild.graph.findOne('prev')

    // administrative must not be preceded by street prefix
    if (prev && prev.classifications.hasOwnProperty('StreetPrefixClassification')) {
      return
    }

    Object.keys(administratives).forEach(level => {
      // use an inverted index for full token matching as it's O(1)
      if (this.index[level].hasOwnProperty(span.norm)) {
        // classify phrase
        span.classify(new AdministrativeClassification(administratives[level].level, administratives[level].confidence))

        // classify child spans
        span.graph.findAll('child').forEach(c => c.classify(new AdministrativeComponentClassification()))
      }
    })
  }
}

module.exports = AdministrativeClassifier
