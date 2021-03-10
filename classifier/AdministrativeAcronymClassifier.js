const PhraseClassifier = require('./super/PhraseClassifier')
const AdministrativeLevel3AcronymClassification = require('../classification/AdministrativeLevel3AcronymClassification')
const AdministrativeLevel4AcronymClassification = require('../classification/AdministrativeLevel4AcronymClassification')
const libpostal = require('../resources/libpostal/libpostal')

const administratives = {
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

class AdministrativeAcronymClassifier extends PhraseClassifier {
  setup () {
    this.index = {}

    Object.keys(administratives).forEach(level => {
      this.index[level] = new Set()
      libpostal.load(this.index[level], ['vn'], administratives[level].file, { lowercase: true })
    })
  }

  each (span) {
    Object.keys(administratives).forEach(level => {
      if (!isNaN(span.norm)) {
        let next = span.graph.findOne('child:last').graph.findOne('next')
        let prev = span.graph.findOne('child:first').graph.findOne('prev')
        if (next || prev) {
          return
        }
        if (administratives[level].level === 3 && this.index[level].hasOwnProperty('quan ' + span.norm)) {
          let norm = 'quan ' + span.norm

          span.classify(
            new AdministrativeLevel3AcronymClassification(
              administratives[level].confidence,
              {
                original: this.index[level][norm].original,
                level: administratives[level].level,
                parentLevel2: this.index[level][norm].parentLevel2,
                parentLevel3: this.index[level][norm].parentLevel3
              }
            )
          )
        } else if (administratives[level].level === 4 && this.index[level].hasOwnProperty('phuong ' + span.norm)) {
          let norm = 'phuong ' + span.norm
          console.log('HUY DUONG')
          console.log(level)
          console.log(norm)
          span.classify(
            new AdministrativeLevel4AcronymClassification(
              administratives[level].confidence,
              {
                original: this.index[level][norm].original,
                level: administratives[level].level,
                parentLevel2: this.index[level][norm].parentLevel2,
                parentLevel3: this.index[level][norm].parentLevel3
              }
            )
          )
        }
      }
    })
  }
}

module.exports = AdministrativeAcronymClassifier
