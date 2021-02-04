const CLASSIFICATIONS = [
  'AdministrativeClassification',
  'StreetClassification'
]

class MustNotPreceedPlaceFilter {
  solve (tokenizer) {
    tokenizer.solution.forEach(s => {
      let lastSolution = null
      s.pair = s.pair.filter(p => {
        let isAdmin = CLASSIFICATIONS.some(c => p.classification.constructor.name === c)
        let prev = p.span.graph.findOne('child:first').graph.findOne('prev')
        if (isAdmin && prev != null && prev.classifications.hasOwnProperty('PlaceClassification') &&
            !(lastSolution != null && prev.start > lastSolution.span.start && prev.start < lastSolution.span.end)) {
          return false
        }

        lastSolution = p
        return true
      })
    })
    tokenizer.solution = tokenizer.solution.filter(s => {
      return s.pair.length !== 0
    })
  }
}

module.exports = MustNotPreceedPlaceFilter
