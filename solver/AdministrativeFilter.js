class AdministrativeFilter {
  solve (tokenizer) {
    tokenizer.solution = tokenizer.solution.filter(s => {
      let administratives = s.pair.filter(p => {
        return p.classification.constructor.name === 'AdministrativeClassification'
      })

      if (administratives.length === 0) {
        return true
      }

      let lastAdministrative = administratives[administratives.length - 1]
      let next = lastAdministrative.span.graph.findOne('child:last').graph.findOne('next')
      if (next !== null) {
        // Administrative should be in the last
        return false
      }

      let nextPreviousAdministrativeToken = null

      for (const administrative of administratives) {
        if (nextPreviousAdministrativeToken !== null && nextPreviousAdministrativeToken.start !== administrative.span.start) {
          return false
        }

        nextPreviousAdministrativeToken = administrative.span.graph.findOne('child:last').graph.findOne('next')
      }

      return true
    })
  }
}

module.exports = AdministrativeFilter
