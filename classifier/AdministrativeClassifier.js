const PhraseClassifier = require('./super/PhraseClassifier')
const AdministrativeClassification = require('../classification/AdministrativeClassification')
const CountryClassification = require('../classification/CountryClassification')
const libpostal = require('../resources/libpostal/libpostal')

class AdministrativeClassifier extends PhraseClassifier {
  constructor (level) {
    super()

    this.level = level
    if (this.level === 0) {
      this.index.vn = true
      this.index['viet nam'] = true
    } else {
      libpostal.load(this.index, ['vn'], 'level' + level + '_names.txt', { lowercase: true })
    }
  }

  setup () {
    this.index = {}
  }

  each (span) {
    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      let firstChild = span.graph.findOne('child:first') || span
      let prev = firstChild.graph.findOne('prev')

      // administrative must not be preceded by place or street prefix
      if (prev && (prev.classifications.hasOwnProperty('PlaceClassification') ||
          prev.classifications.hasOwnProperty('StreetPrefixClassification'))) {
        return
      }

      if (this.level === 0) {
        span.classify(new CountryClassification(1))
      } else {
        span.classify(new AdministrativeClassification(this.level, 1))
      }
    }
  }
}

module.exports = AdministrativeClassifier
