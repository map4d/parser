const BaseSolver = require('./super/BaseSolver')
const StreetClassification = require('../classification/StreetClassification')
const AdministrativeClassification = require('../classification/AdministrativeClassification')
const HouseNumberClassification = require('../classification/HouseNumberClassification')

class StreetBooster extends BaseSolver {
  solve (tokenizer) {
    tokenizer.solution.forEach(s => {
      const street = s.pair.find(p => p.classification.constructor === StreetClassification)

      // Do nothing if there is no street
      if (!street) { return }

      const next = street.span.graph.findOne('child:last').graph.findOne('next')
      const prev = street.span.graph.findOne('child:first').graph.findOne('prev')

      if ((next && s.pair.find(p => p.classification.constructor === AdministrativeClassification && p.span.start === next.start)) ||
          (prev && s.pair.find(p => p.classification.constructor === HouseNumberClassification && p.start <= prev.start && p.end >= prev.start))) {
        street.classification.confidence = 0.9
      }
    })
  }
}

module.exports = StreetBooster
