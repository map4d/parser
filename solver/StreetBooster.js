const BaseSolver = require('./super/BaseSolver')
const StreetClassification = require('../classification/StreetClassification')
const AdministrativeClassification = require('../classification/AdministrativeClassification')

class StreetBooster extends BaseSolver {
  solve (tokenizer) {
    tokenizer.solution.forEach(s => {
      const street = s.pair.find(p => p.classification.constructor === StreetClassification)

      // Do nothing if there is no street
      if (!street) { return }

      const next = street.span.graph.findOne('child:last').graph.findOne('next')

      // Do nothing if street in the last position
      if (!next) { return }

      const nextAdministrativeOfStreet = s.pair.find(p => p.classification.constructor === AdministrativeClassification && p.span.start === next.start)

      if (nextAdministrativeOfStreet) {
        street.classification.confidence = 1.0
      }
    })
  }
}

module.exports = StreetBooster
