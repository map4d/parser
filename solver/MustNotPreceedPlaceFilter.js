const CLASSIFICATIONS = [
  'AdministrativeClassification',
  'CountryClassification',
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
  }
}

module.exports = MustNotPreceedPlaceFilter
