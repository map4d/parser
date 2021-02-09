const BaseSolver = require('./super/BaseSolver')
const StreetClassification = require('../classification/StreetClassification')
const AdministrativeClassification = require('../classification/AdministrativeClassification')

class StreetNameSameAsAdministrativePenalty extends BaseSolver {
  solve (tokenizer) {
    tokenizer.solution.forEach(s => {
      const street = s.pair.find(p => p.classification.constructor === StreetClassification)
      const level1Administrative = s.pair.find(p => p.classification.constructor === AdministrativeClassification && p.span.classifications.AdministrativeClassification.label === 'level1')

      // Do nothing if there is no street or level1 administrative exists
      if (!street || level1Administrative) { return }

      if (street.span.classifications.hasOwnProperty('AdministrativeClassification') &&
          (street.span.classifications.AdministrativeClassification.label === 'level0' || street.span.classifications.AdministrativeClassification.label === 'level1')
      ) {
        s.penalty += 0.2
      }
    })
  }
}

module.exports = StreetNameSameAsAdministrativePenalty
