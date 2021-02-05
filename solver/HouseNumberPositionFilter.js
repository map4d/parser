const BaseSolver = require('./super/BaseSolver')
const HouseNumberClassification = require('../classification/HouseNumberClassification')
const StreetClassification = require('../classification/StreetClassification')

class HouseNumberPositionFilter extends BaseSolver {
  solve (tokenizer) {
    tokenizer.solution.forEach(s => {
      const housenumber = s.pair.find(p => p.classification.constructor === HouseNumberClassification)
      const street = s.pair.find(p => p.classification.constructor === StreetClassification)

      // Do nothing if there is no street/housenumber or no meta in street classification
      if (!housenumber || !street) { return }

      if (housenumber.span.start > street.span.start) {
        s.pair = s.pair.filter(p => p.classification.constructor !== HouseNumberClassification)
      }
    })
  }
}

module.exports = HouseNumberPositionFilter
