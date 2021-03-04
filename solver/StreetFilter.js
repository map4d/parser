const BaseSolver = require('./super/BaseSolver')
const HouseNumberClassification = require('../classification/HouseNumberClassification')
const StreetClassification = require('../classification/StreetClassification')

class StreetFilter extends BaseSolver {
  solve (tokenizer) {
    tokenizer.solution = tokenizer.solution.filter(s => {
      let solutionSize = s.pair.length
      let isStreetValid = true
      for (let i = 0; i < solutionSize; ++i) {
        if (s.pair[i].classification.constructor === StreetClassification) {
          if (i !== 0 && s.pair[i - 1].classification.constructor === HouseNumberClassification) {
            break
          }

          let nextStreet = s.pair[i].span.graph.findOne('child:last').graph.findOne('next')
          if (!nextStreet) {
            break
          }

          if (i === solutionSize - 1 || nextStreet.start !== s.pair[i + 1].span.start) {
            isStreetValid = false
            break
          }
        }
      }

      if (!isStreetValid) {
        s.pair = s.pair.filter(p => p.classification.constructor !== StreetClassification)
      }

      return s.pair && s.pair.length !== 0
    })
  }
}

module.exports = StreetFilter
