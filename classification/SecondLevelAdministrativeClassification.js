const Classification = require('./Classification')

class SecondLevelAdministrativeClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.public = true
    this.label = 'level2'
  }
}

module.exports = SecondLevelAdministrativeClassification
