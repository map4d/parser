const BaseSolver = require('./super/BaseSolver')
const StreetClassification = require('../classification/StreetClassification')

class StreetNameSameAsAdministrativePenalty extends BaseSolver {
  solve (tokenizer) {
    tokenizer.solution.forEach(s => {
      const street = s.pair.find(p => p.classification.constructor === StreetClassification)

      // Do nothing if there is no street
      if (!street) { return }

      if (street.span.classifications.hasOwnProperty('AdministrativeClassification')) {
        s.penalty += 0.2
      }
    })
  }
}

module.exports = StreetNameSameAsAdministrativePenalty
