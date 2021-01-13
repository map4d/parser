const Classification = require('./Classification')

class ThirdLevelAdministrativeClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.public = true
    this.label = 'level3'
  }
}

module.exports = ThirdLevelAdministrativeClassification
