const PhraseClassifier = require('./super/PhraseClassifier')

class CompositeClassifier extends PhraseClassifier {
  constructor (schemes) {
    super()
    this.schemes = schemes || []
  }

  each (span) {
    this.schemes.forEach(s => {
      // invalid scheme
      if (!Array.isArray(s.scheme)) { return }

      let children = span.graph.findAll('child')

      // phrase should contain same number of children as scheme does
      if (children.length !== s.scheme.length) { return }

      // iterate over the scheme items and children
      // at the same time, comparing each
      for (let i = 0; i < s.scheme.length; i++) {
        let sch = s.scheme[i]
        let child = children[i]

        if (Array.isArray(sch.is)) {
          if (
            // child should include at least one of target classifications
            !sch.is.some(cl => child.classifications.hasOwnProperty(cl))
          ) { return }
        }

        if (Array.isArray(sch.not)) {
          if (
            // child should not include any target classifications
            sch.not.some(cl => child.classifications.hasOwnProperty(cl))
          ) { return }
        }
      }

      // optionally classify phrase
      if (typeof s.Class === 'function') {
        span.classify(new s.Class(s.confidence))
      }

      // optionally classify children
      s.scheme.forEach((sch, i) => {
        if (typeof sch.Class === 'function') {
          children[i].classify(new sch.Class(sch.confidence))
        }
      })
    })
  }
}

module.exports = CompositeClassifier
