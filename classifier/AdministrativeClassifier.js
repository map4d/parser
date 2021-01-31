const PhraseClassifier = require('./super/PhraseClassifier')
const AdministrativeClassification = require('../classification/AdministrativeClassification')
const CountryClassification = require('../classification/CountryClassification')
const libpostal = require('../resources/libpostal/libpostal')

const administratives = {
  'level0': {
    file: 'level0_names.txt',
    level: 0
  },
  'level1': {
    file: 'level1_names.txt',
    level: 1
  },
  'level2': {
    file: 'level2_names.txt',
    level: 2
  },
  'level3': {
    file: 'level3_names.txt',
    level: 3
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
        if (administratives[level].level === 0) {
          span.classify(new CountryClassification(1))
        } else {
          span.classify(new AdministrativeClassification(administratives[level].level, 1))
        }
      }
    })
  }
}

module.exports = AdministrativeClassifier
