const PhraseClassifier = require('./super/PhraseClassifier')
const AdministrativeClassification = require('../classification/AdministrativeClassification')
const AdministrativeComponentClassification = require('../classification/AdministrativeComponentClassification')
const libpostal = require('../resources/libpostal/libpostal')

const administratives = {
  'level1': {
    file: 'level1_names.txt',
    level: 1,
    confidence: 1.0
  },
  'level2': {
    file: 'level2_names.txt',
    level: 2,
    confidence: 1.0
  },
  'level3': {
    file: 'level3_names.txt',
    level: 3,
    confidence: 0.85
  },
  'level4': {
    file: 'level4_names.txt',
    level: 4,
    confidence: 0.65
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
    Object.keys(administratives).forEach(level => {
      // use an inverted index for full token matching as it's O(1)
      if (this.index[level].hasOwnProperty(span.norm)) {
        // classify phrase
        span.classify(
          new AdministrativeClassification(
            administratives[level].level,
            administratives[level].confidence,
            {
              original: this.index[level][span.norm].original,
              level: administratives[level].level,
              parentLevel2: this.index[level][span.norm].parentLevel2,
              parentLevel3: this.index[level][span.norm].parentLevel3
            }
          )
        )

        // classify child spans
        span.graph.findAll('child').forEach(c => c.classify(new AdministrativeComponentClassification()))
      }
    })
  }
}

module.exports = AdministrativeClassifier
