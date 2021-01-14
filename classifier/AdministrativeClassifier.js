const PhraseClassifier = require('./super/PhraseClassifier')
const AdministrativeClassification = require('../classification/AdministrativeClassification')
const libpostal = require('../resources/libpostal/libpostal')

class AdministrativeClassifier extends PhraseClassifier {
  constructor (level) {
    super()

    this.level = level
    libpostal.load(this.index, ['vn'], 'level' + level + '_names.txt', { lowercase: true })
  }

  setup () {
    this.index = {}
  }

  each (span) {
    // do not classify tokens if they already have a 'StreetClassification'
    if (span.classifications.hasOwnProperty('StreetClassification') || (
      span.graph.length('child') > 0 &&
        span.graph.findOne('child').classifications.hasOwnProperty('StreetClassification')
    )
    ) { return }

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new AdministrativeClassification(this.level, 1))
    }
  }
}

module.exports = AdministrativeClassifier
