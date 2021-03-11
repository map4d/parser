const BaseSolver = require('./super/BaseSolver')
const StreetClassification = require('../classification/StreetClassification')
const AdministrativeClassification = require('../classification/AdministrativeClassification')
const HouseNumberClassification = require('../classification/HouseNumberClassification')

class StreetPenalty extends BaseSolver {
  solve (tokenizer) {
    tokenizer.solution.forEach(s => {
      const street = s.pair.find(p => p.classification.constructor === StreetClassification)
      if (!street) { return }

      let prevStreet = street.span.graph.findOne('child:first').graph.findOne('prev')
      let nextStreet = street.span.graph.findOne('child:last').graph.findOne('next')
      const administratives = s.pair.filter(p => p.classification.constructor === AdministrativeClassification)
      const housenumber = s.pair.find(p => p.classification.constructor === HouseNumberClassification)

      // Base penalty
      s.penalty += 0.1
      if (nextStreet !== null && !administratives.some(administrative => administrative.span.start === nextStreet.start)) {
        if (prevStreet && !(housenumber && !(housenumber.start <= prevStreet.start && housenumber.end >= prevStreet.start))) {
          s.penalty += 0.3
        }
      } else if (nextStreet == null) {
        const administrative = s.pair.find(p => p.classification.constructor === AdministrativeClassification)
        if (administrative && administrative.span.start - street.span.end > 3) {
          if (prevStreet && !(housenumber && !(housenumber.start <= prevStreet.start && housenumber.end >= prevStreet.start))) {
            s.penalty += 0.3
          }
        }
      }

      const level1Administrative = administratives.find(administrative => administrative.span.classifications.AdministrativeClassification.level === 1)
      if (level1Administrative) { return }

      if (street.span.classifications.hasOwnProperty('AdministrativeClassification') &&
          (street.span.classifications.AdministrativeClassification.label === 'level0' || street.span.classifications.AdministrativeClassification.label === 'level1')
      ) {
        s.penalty += 0.2
      }
    })
  }
}

module.exports = StreetPenalty
