const Classification = require('./Classification')

class AdministrativeClassification extends Classification {
  constructor (level, confidence, meta) {
    super(confidence, meta)
    this.public = true
    this.label = 'level' + level
  }
}

module.exports = AdministrativeClassification
