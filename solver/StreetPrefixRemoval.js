class StreetPrefixRemoval {
  solve (tokenizer) {
    tokenizer.solution.forEach(s => {
      let street = s.pair.find(p => {
        return p.classification.constructor.name === 'StreetClassification'
      })

      if (street && street.span.body.startsWith('duong ') && !street.span.body.startsWith('duong so')) {
        let newStreetBody = street.span.body.substring('duong '.length)
        if (newStreetBody.indexOf(' ') !== -1) {
          street.span.body = newStreetBody
        }
      }
    })
  }
}

module.exports = StreetPrefixRemoval
