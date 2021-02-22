class AdministrativeUnitRemoval {
  solve (tokenizer) {
    tokenizer.solution.forEach(s => {
      let administratives = s.pair.filter(p => {
        return p.classification.constructor.name === 'AdministrativeClassification'
      })

      administratives.forEach(administrative => {
        administrative.span.body = administrative.classification.meta.original
      })
    })
  }
}

module.exports = AdministrativeUnitRemoval
