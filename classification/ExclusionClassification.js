const Classification = require('./Classification')

class ExclusionClassification extends Classification {
  constructor (meta) {
    super(1.0, meta)
    this.public = false
    this.label = 'exclusion'
  }
}

module.exports = ExclusionClassification
