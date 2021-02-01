const CLASSIFICATIONS = [
  'AdministrativeClassification',
  'StreetClassification'
]

class MustNotPreceedPlaceFilter {
  solve (tokenizer) {
    tokenizer.solution.forEach(s => {
      s.pair = s.pair.filter(p => {
        let isAdmin = CLASSIFICATIONS.some(c => p.classification.constructor.name === c)
        let prev = p.span.graph.findOne('child:first').graph.findOne('prev')
        if (isAdmin && prev != null && prev.classifications.hasOwnProperty('PlaceClassification')) {
          return false
        }

        return true
      })
    })
    tokenizer.solution = tokenizer.solution.filter(s => {
      return s.pair.length !== 0
    })
  }
}

module.exports = MustNotPreceedPlaceFilter
